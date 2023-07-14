<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>K학교전! - GO AND STOP</title>

    <link rel="shortcut icon" href="./image/favicon.png" type="image/x-icon">
    <link rel="icon" href="./image/favicon.png" type="image/x-icon">

    <link rel="stylesheet" href="./style/base.css">
    <link rel="stylesheet" href="./style/enhance_backup.css">
    <link rel="stylesheet" href="./style/font.css">
</head>
<body>
    <div class="mainpage">

        <!-- side left page -->
        <div class="leftpage">
            <!-- logo -->
            <div class="logo">
                <div class="biglogotext">
                    <div class="fontC colorW f56">K학교전</div>
                </div>
                <div class="smalllogotext">
                    <div class="fontC colorW f24" id="schoolname"></div>
                </div>
            </div>

            <!-- enhance window -->
            <div id="item">
                <img id="itemimg" src="">
                <div id="itemname" class="fontP colorW f56 w700"></div>
                <div id="persent" class="fontP colorW">현재 확률 : 0%</div>
            </div>

            <form action="./PROCESSING.php" method="post">
                <div class="flexbox btn">
                    <input class="gobutton fontC colorW f56" type="button" value="고!" onclick="randomgo();">
                    <?php
                        $code = $_GET['code'];
                        echo '<input class="hiddenform" type="text" name="school_code" value="'.$code.'">';
                    ?>
                    <?php
                        $code = $_GET['name'];
                        echo '<input class="hiddenform" type="text" name="school_name" value="'.$code.'">';
                    ?>
                    <input class="hiddenform" type="text" name="score" id="scorename" value="250">
                    <input class="stopbutton fontC colorW f56" type="submit" value="스탑!">
                </div>
            </form>
        </div>

        <!-- side right page -->
        <div class="rightpage">
            <div class="logo">
                <div class="biglogotext">
                    <div class="fontC colorW f56">현재 랭킹</div>
                </div>
            </div>
            <!-- 랭크 박스 -->
            <div class="rankbox">
                <?php

                    $DB = mysqli_connect('localhost', 'root', '');
                    mysqli_select_db($DB, 'kschool');

                    $query = "select * from ranking order by score desc";
                    $result = mysqli_query($DB, $query);

                    while($row = mysqli_fetch_array($result)){
                        echo '<div class="ranklist">';
                        echo '<div class="pag fontC colorW rankschool f42">';
                        echo $row['school_name'];
                        echo '</div>';

                        echo '<div class="pag fontP colorW rankscore w500 f28">';
                        echo $row['score'];
                        echo '점';
                        echo '</div>';
                        echo '</div>';
                    }
                    mysqli_close($DB);
                ?>
            </div>
        </div>

    </div>
    <script src="./script/enhance.js"></script>
</body>
</html>