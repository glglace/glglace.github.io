<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 5.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=big5">
<title>�������Ѯv���оǺ��x--�T���K��ACE</title>
<base target="_blank">
</head>

<body>
<h1 align="center"><font color="#808000">�T</font><font color="#800080">��</font><font color="#008000">�K</font><font color="#008080">��</font><font color="#FF0000">ACE</font><font size="3">&nbsp; 
--- <span style="font-weight: 400">�������Ѯv�����x v0.4</span></font></h1>
<p align="center">
<img border="0" src="pics/glgl-20070116.jpg" width="600" height="615"></p>
<p align="center">
<img border="0" src="pics/glgl-20070116-1.jpg" width="600" height="274"></p>
<p align="center">
20060116 ���W�q����U�s������W�Z�A�֨쳻�r�ɥi��������M�B���˪e��</p>
<p align="center">
<img border="0" src="pics/glgl-20070103.jpg" width="600" height="432"></p>
<p align="center">
2007-01-03 �C�ѤW�Z���|�g�L�ÿ����A���ɷ|���o�ج����C</p>
<p align="center">
<img border="0" src="pics/glgl-20061225-1.jpg" width="600" height="516"></p>
<p align="center">
2006-12-25 �����m�Q���p�B�A�ÿ���p�Z�N���t�A�s�r�|�A�C</p>
<p align="center">
<img border="0" src="pics/glgl-20061225.jpg" width="600" height="281"></p>
<p align="center">
2006-12-25 �t�ϸ`�M��A��������������g��</p>
<p align="center">
<img border="0" src="pics/glgl-20061223.jpg" width="600" height="393"></p>
<p align="center">
2006-12-23 �饻? ���O�A�O�����������p</p>
<p align="center">
<img border="0" src="pics/glgl-20061219.jpg" width="600" height="494"></p>
<p align="center">
<img border="0" src="pics/glgl-20061216-1.jpg" width="590" height="310"></p>
<p align="center">
<img border="0" src="pics/glgl-20061127.jpg" width="600" height="320"></p>

<p align="center">20061137-�F���E�{�A�M�᪺��������A�¶���{<br>
�����j�s�W�u�A�Ӷ������g�L�O����W�A�_��H��</p>

<p align="center">

<img border="0" src="pics/glgl-20061125.jpg" width="500" height="479"></p>
</p>
<p align="center">2006-11-25 ������a���f-��ŷx�����</p>
<p align="center">
<img border="0" src="pics/2000/20001017-wp01.JPG" width="600" height="396"></p>
<p align="center">��Ѫ��Pı�A�q�H�e�Q���������A�ܦ��߷R�x�W�r�𪺦h�m</p>
<p align="center">�@</p>
<p align="center">
<img border="0" src="pics/2000/20001017-18.jpg" width="600" height="429"></p>
<p align="center">
<img border="0" src="pics/20061006-DSCF0467.JPG" width="600" height="450"></p>
<p align="center">�@</p>

</body>

</html>


<?
//�p�ƾ��򥻳]�w
$dat_file = "counter.txt";
$show_type = 0;

//�p�ƾ��D�{��
$fp = fopen($dat_file,"r");
$counter = fgets($fp,6);
$counter = $counter +1;
fclose($fp);

if ($show_type == 0){
	echo "<p align=\"center\">�s���H��:".$counter."</p>";
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