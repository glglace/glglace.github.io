/* 180sc2.js Scroll script Copyright(c)M.Murakami 2002-2007 mmurakami@mx4.kiti.ne.jp */
/* 2004.9.23 VersionUp window.onresize */
/* 180sc2 2007.6.24 VersionUp corresponds to FireFox2 */
/* 180sc3 2007.7.12 corresponds to Netscape7 */

pic1x = 0;
mdot = 1 ; // dot
tms = 20 ; // ms
st = 1000 ; // ms
ds = 0 ; // dot
rmax = 0 ; // dot
var scw;
pn_flg = true ;
play_flg = true ;
down_flg = false ;
pic_flg = false ;
ctl = true ;
spd = ">" ;
lim = "off";
var scrID;
var timerID;

/* Controller */
if (ctl) {
	document.write(
	"<TABLE id='cont1' style='visibility:hidden' width='100%' cellpadding='0' cellspacing='0'>",
	" <TBODY>",
	"  <TR>",
	"   <TD>",
	"    <TABLE cellpadding='0' cellspacing='4'>",
	"     <TBODY>",
	"      <TR>",
	"       <TD nowrap width='70' id='pic' onmousedown='b_click(\"pic\")' style='background-color:#cccccc; color:#000000; font-size:13px; text-align:center; cursor:hand'>Scroll off</TD>",
	"       <TD nowrap width='16'></TD>",
	"       <TD nowrap width='50' id='play' onmousedown='b_click(\"play\")' style='background-color:#bbbb99; color:#000000; font-size:13px; text-align:center; cursor:hand'>Play</TD>",
	"       <TD nowrap width='40' id='rev' onmousedown='b_click(\"rev\")' style='background-color:#bbbb99; color:#000000; font-size:13px; text-align:center; cursor:hand'>Rev.</TD>",
	"       <TD nowrap width='24' id='f' onmousedown='b_click(\"f\")' style='background-color:#bbbb99; color:#000000; font-size:10px; text-align:center; cursor:hand'>&gt;</TD>",
	"       <TD nowrap width='24' id='ff' onmousedown='b_click(\"ff\")' style='background-color:#bbbb99; color:#000000; font-size:10px; text-align:center; cursor:hand'>&gt;&gt;</TD>",
	"       <TD nowrap width='24' id='fff' onmousedown='b_click(\"fff\")' style='background-color:#bbbb99; color:#000000; font-size:10px; text-align:center; cursor:hand'>&gt;&gt;&gt;</TD>",
	"       <TD nowrap width='16'></TD>",
	"       <TD nowrap width='30' onmousedown='b_updown(\"f_down\")' onmouseup='b_updown(\"f_up\")' onmouseout='b_updown(\"out\")' style='background-color:#bbbb99; color:#000000; font-size:10px; text-align:center; cursor:hand'>&lt;--</TD>",
	"       <TD nowrap width='30' onmousedown='b_updown(\"r_down\")' onmouseup='b_updown(\"r_up\")' onmouseout='b_updown(\"out\")' style='background-color:#bbbb99; color:#000000; font-size:10px; text-align:center; cursor:hand'>--&gt;</TD>",
	"       <TD nowrap width='16'></TD>",
	"      </TR>",
	"     </TBODY>",
	"    </TABLE>",
	"   </TD>",
	"   <TD id='cont2' align='right' nowrap width='100%'><A href='http://ww4.tiki.ne.jp/~mmurakami/setoy/' target='_blank'><FONT size='-1' color='#aaaa88'>JavaScript by M.Murakami</FONT></A></TD>",
	"  </TR>",
	" </TBODY>",
	"</TABLE>"
	);
};

/* size */
function pwset(){
	dw = mdot ;
	ds += 20;
	document.getElementById("pic1").style.position = "relative" ;
	switch (spd){
		case '>' : dw = mdot ; break ;
		case '>>' : dw = mdot * 2 ; break ;
		case '>>>' : dw = mdot * 4 ; break ;
	}

	if(document.body.clientWidth){
		scw = document.body.clientWidth ;
		if (scw < 40){ scw = 40 };
		if (scw > 2048){ scw = 2048 };
	}
	else{
		scw = 800 ;
		if (screen.width >= 800){ scw = screen.width };
		if ((screen.width > 1280) && (lim.toLowerCase() == "on")) { scw = 1024 };
		ds += 80;
	}
	if ((document.referrer.search(/setoy/i) > 0 ) && ctl) {document.getElementById("cont2").style.visibility="hidden" };

	pw1 = -( document.getElementById("pic1").width - scw + ds ) ;
	b_set();
	s_mov();
}

/* resize */	/* 2004.09.23 */
function re_size(){
	clearInterval(scrID);
	if(document.body.clientWidth){
		scw = document.body.clientWidth ;
		if (scw < 40){ scw = 40 };
		if (scw > 2048){ scw = 2048 };
		pw1 = -( document.getElementById("pic1").width - scw + ds ) ;
	}
	s_mov();
}

window.onresize = re_size;	/* 2004.09.23 */

/* start move */
function s_mov(){
	clearInterval(scrID);
	if ( play_flg ) {
		if ( pn_flg ) { scrID=setInterval('p_mov()',tms)} else { scrID=setInterval('n_mov()',tms)};
	}
}

/* move left */
function p_mov(){
	pic1x -= dw ;
	if ( pic1x >= pw1 ) { document.getElementById("pic1").style.left = pic1x + "px" } 
	else {pic1x = pw1 ; clearInterval(scrID); pn_flg = false ; t_mov()};
}

/* move right */
function n_mov(){
	pic1x += dw ;
	if ( pic1x <= rmax ) { document.getElementById("pic1").style.left = pic1x + "px" }
	else { pic1x = rmax ; clearInterval(scrID); pn_flg = true ; t_mov()};
}

/* turn */
function t_mov(){
	timerID = setTimeout( "s_mov()", st );
	b_set();
}

/* show buttons */
function b_set(){
	if (ctl) {
		document.getElementById("cont1").style.visibility = "visible";
		if (play_flg){document.getElementById("play").innerText="Stop"} else { document.getElementById("play").innerText="Play" };
		if (pn_flg){document.getElementById("f").innerText=">";document.getElementById("ff").innerText=">>";document.getElementById("fff").innerText=">>>"}
			else {document.getElementById("f").innerText="<";document.getElementById("ff").innerText="<<";document.getElementById("fff").innerText="<<<"};
		if (pic_flg) {document.getElementById("pic").innerText="Scroll ON"} else {document.getElementById("pic").innerText="Scroll Off"};
	}
}

/* button click */
function b_click(b){
	clearInterval(scrID);
	switch (b){
		case 'play' : play_flg = !play_flg ; break;
		case 'f' : dw = mdot ; play_flg = true ; break;
		case 'ff' : dw = mdot * 2 ; play_flg = true ; break;
		case 'fff' : dw = mdot * 4 ; play_flg = true ; break;
		case 'rev' : pn_flg = !pn_flg ; break;
		case 'pic' : if (pic_flg) { pic_flg = false ; pn_flg = true ; play_flg = true }
				else { pic_flg = true ; pn_flg = true ; play_flg = false ; pic1x = 0 ; document.getElementById("pic1").style.left = pic1x + "px" } ; break;
	}
	if (play_flg) { pic_flg = false };
	b_set();
	if (play_flg) { pic_flg = false ;  s_mov() };
}

/* Arrow move right */
function pf_mov(){
	pic1x -= 16 ;
	if (pic1x < pw1){pic1x = pw1};
	if (down_flg) { document.getElementById("pic1").style.left = pic1x + "px"; timerID = setTimeout( "pf_mov()", tms ) } 
}
/* Arrow move left */
function nf_mov(){
	pic1x += 16 ;
	if (pic1x > rmax){pic1x = rmax};
	if (down_flg) { document.getElementById("pic1").style.left = pic1x + "px"; timerID = setTimeout( "nf_mov()", tms ) } 
}

/* Arrow click */
function b_updown(b){
	switch (b){
		case 'r_down' : pn_flg = true  ; down_flg = true ; break ;
		case 'f_down' : pn_flg = false ; down_flg = true ; break ;
		default : down_flg = false ;
	}
	if (down_flg) {
		clearInterval(scrID); play_flg = false ; pic_flg = false ; b_set();
		if (pn_flg) {pf_mov()} else {nf_mov()};
	};
}
