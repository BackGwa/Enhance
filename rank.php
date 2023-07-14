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
            <!-- 랭크 박스 -->
            <div class="onlyranklist">
                <h1 class="fontC colorW f64">랭크</h1>
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
</body>
</html>