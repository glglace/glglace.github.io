<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 5.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=big5">
<title>江明勳老師的教學網誌--嘰哩呱啦ACE</title>
<base target="_blank">
</head>

<body>
<h1 align="center"><font color="#808000">嘰</font><font color="#800080">哩</font><font color="#008000">呱</font><font color="#008080">啦</font><font color="#FF0000">ACE</font><font size="3">&nbsp; 
--- <span style="font-weight: 400">江明勳老師的網誌 v0.4</span></font></h1>
<p align="center">
<img border="0" src="pics/glgl-20070116.jpg" width="600" height="615"></p>
<p align="center">
<img border="0" src="pics/glgl-20070116-1.jpg" width="600" height="274"></p>
<p align="center">
20060116 早上從日月潭下山到水里上班，快到頂崁時可眺望水里和濁水溪河床</p>
<p align="center">
<img border="0" src="pics/glgl-20070103.jpg" width="600" height="432"></p>
<p align="center">
2007-01-03 每天上班都會經過永興橋，有時會有這種美景。</p>
<p align="center">
<img border="0" src="pics/glgl-20061225-1.jpg" width="600" height="516"></p>
<p align="center">
2006-12-25 水里鄉十校聯運，永興國小武術表演，山巒疊翠。</p>
<p align="center">
<img border="0" src="pics/glgl-20061225.jpg" width="600" height="281"></p>
<p align="center">
2006-12-25 聖誕節清晨，水社壩堤的水霧迷濛</p>
<p align="center">
<img border="0" src="pics/glgl-20061223.jpg" width="600" height="393"></p>
<p align="center">
2006-12-23 日本? 不是，是鹿谷的內湖國小</p>
<p align="center">
<img border="0" src="pics/glgl-20061219.jpg" width="600" height="494"></p>
<p align="center">
<img border="0" src="pics/glgl-20061216-1.jpg" width="590" height="310"></p>
<p align="center">
<img border="0" src="pics/glgl-20061127.jpg" width="600" height="320"></p>

<p align="center">20061137-靈光乍現，清晨的水社壩堤，朝陽初現<br>
水社大山稜線，太陽光束射過慈恩塔上，震攝人心</p>

<p align="center">

<img border="0" src="pics/glgl-20061125.jpg" width="500" height="479"></p>
</p>
<p align="center">2006-11-25 日月潭住家門口-秋末溫暖的晨光</p>
<p align="center">
<img border="0" src="pics/2000/20001017-wp01.JPG" width="600" height="396"></p>
<p align="center">秋天的感覺，從以前嚮往的楓紅，變成喜愛台灣巒樹的多彩</p>
<p align="center">　</p>
<p align="center">
<img border="0" src="pics/2000/20001017-18.jpg" width="600" height="429"></p>
<p align="center">
<img border="0" src="pics/20061006-DSCF0467.JPG" width="600" height="450"></p>
<p align="center">　</p>

</body>

</html>


<?
//計數器基本設定
$dat_file = "counter.txt";
$show_type = 0;

//計數器主程式
$fp = fopen($dat_file,"r");
$counter = fgets($fp,6);
$counter = $counter +1;
fclose($fp);

if ($show_type == 0){
	echo "<p align=\"center\">瀏覽人次:".$counter."</p>";
} else {
	$l = strlen($counter);
	for ($i = 0; $i < $l; $i++){
		$num = substr($counter, $i, 1);
		echo "<img src = \"".$num.".gif\">";
	}
}
$fp = fopen($dat_file, "w");
$tmp = fputs($fp, $counter, strlen($counter) + 1);
fclose($fp);
?> 