<?php
$url = 'http://163.22.105.1/~james/dr_pu/dr_pu_10.htm';

if( $html = file_get_contents($url) ) {
	$from = 0;
	$i=0;
	$error="";
	do {
		$ul_start = strpos($html, '<ul>', $from);
		$ul_end = strpos($html, '</ul>', $from);
		if($ul_start>=0 && $ul_end>=0 && $ul_end > $ul_start) {
			$li = substr($html, $ul_start+4, $ul_end-$ul_start-4);
			$from = $ul_end+1;
			
			$from2 = 0;
			$j=0;
			do {
				$li_start = strpos($li, '<li>', $from2);
				$li_end = strpos($li, '</li>', $from2);
				if($li_start>=0 && $li_end>=0 && $li_end > $li_start) {
					$temp = substr($li, $li_start+4, $li_end-$li_start-4);
					$temp = str_replace('&nbsp;', " ", $temp);
					if( preg_match("|/p/([^\"]+)\">\[??]|", $temp, $match) ) {
						if(!isset($content[$i][$match[1]]) ) {
							$content[$i][$match[1]] = $temp;
							
							if( $time_start = strpos($temp, '</a>') ) {
								$time_start += 4;
								if( $time_end = strpos($temp, '<a href', $time_start) ) {
									if($time_end > $time_start) {
										$timeStr = substr($temp, $time_start, $time_end-$time_start);
										$timeStr = str_replace('-', '', $timeStr);
										$timeStr = trim(str_replace(',', '', $timeStr));
										$fields = split(" ", $timeStr);
										$month = array('Jan'=>'01','Feb'=>'02','Mar'=>'03','Apr'=>'04',
												  'May'=>'05','Jue'=>'06','Jul'=>'07','Aug'=>'08',
												  'Sep'=>'09','Oct'=>'10','Nov'=>'11','Dec'=>'12');
										if(strpos($fields[4], 'PM') > 0) {
											$hh = (int)substr($fields[4], 0, 2);
											if($hh < 12) {
												$hh += 12;
											}
											$fields[4] = $hh.substr($fields[4], 3, 2);
										} else {
											if(strpos($fields[4], 'AM') > 0 ) {
												if(substr($fields[4], 0, 2)=='12') {
													$fields[4] = '00'.substr($fields[4], 2, 3);
												}
												$fields[4] = str_replace('AM', '', $fields[4]);
											}
											$fields[4] = str_replace(':', '', $fields[4]);
										}
										$timeStr = $fields[2].$month[$fields[0]].$fields[1].$fields[4];

										$timeArray[$i][$match[1]] = $timeStr;
									}
								}
							}
						}
						//$content[$i][$j++]
					} else {
						$error .= $temp;
					}
					$from2 = $li_end+1;
				}
			} while($li_start>=0 && $li_end>=0 && $li_end > $li_start);
			
			$i++;
		}
	} while($ul_start>=0 && $ul_end>=0 && $ul_end > $ul_start);
	for($i=0; $i<sizeof($content); $i++) {
		asort($content[$i]);
	}
}
?>
<html>
<head>
<title>撠?????Dr. Pu</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
</head>
<body>
<?php
for($i=0; $i<sizeof($content); $i++) {
	asort($timeArray[$i]);
	echo "<h3>".($i+1)."</h3>\n";
	echo "<ul>\n";
	foreach($timeArray[$i] as $k=>$v) {
		echo "<li>".$content[$i][$k]."</li>\n";
	}
	echo "</ul>\n";
}
?>
</pre>