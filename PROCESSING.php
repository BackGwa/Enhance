<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>K학교전! - GO AND STOP</title>

    <link rel="shortcut icon" href="./image/favicon.png" type="image/x-icon">
    <link rel="icon" href="./image/favicon.png" type="image/x-icon">

    <link rel="stylesheet" href="./style/base.css">
    <link rel="stylesheet" href="./style/enhance.css">
    <link rel="stylesheet" href="./style/font.css">
</head>
<body>
    <div class="mainpage">

    <?php

        $scode = $_POST['school_code'];
        $score = $_POST['score'];

        if($score > 1500) {
            $score = 0;
        }

        if($score < 250) {
            $score = 250;
        }

        $sname = $_POST['school_name'];

        $DB = mysqli_connect('localhost', 'root', '');
        mysqli_select_db($DB, 'kschool');

        $query = "select * from ranking where school_code = '".$scode."'";
        $result = mysqli_query($DB, $query);

        if($row = $result -> fetch_assoc()){
            // 학교 있을 때
        } else {
            // 학교 없을 때
            $query = "insert into ranking values('$sname', '$scode', 0)";
            mysqli_query($DB, $query);
        }

        $query = "update ranking set score = (score + $score) where school_code = $scode";
        mysqli_query($DB, $query);

        mysqli_close($DB);
        
    ?>


        <div class="fulltext centertext colorW fontP f64 w700">
            랭킹에 등록되었습니다. 
            <br><div class="fulltext f36 w400">데스크에서 상품을 수령해주세요.</div>
            <br><div class="fulltext f24 w300">스코어 : <?php echo $_POST['score'];?></div>
            <br><a class="f24 rmdeco" href="./index.html">뒤로가기</a>
        </div>
    </div>
</body>
</html>