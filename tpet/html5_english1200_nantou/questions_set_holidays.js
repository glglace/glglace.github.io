//題幹的字型大小
questionFontSize = 48; 

//題幹的顏色
questionFontColor = "#ff0000";

//是否自動顯示選項供作答(預設為 true; false 時需按[開始作答]鈕才會出現選項)
auto_show_options = false;

//選項的字型顏色
optionsFontColor = "#fffeef";

//選項的背景顏色
optionsBackgroundColor = "#0000ff"; 

//選項的字型大小
optionsFontSize = 35;

//每題有幾個選項
numberOfOptions = 3;

//每列最多可以有幾個選項
numberOfOptionsPerRow = 1;	

//每回合抽幾題題目
numberOfQuestionsPerRound = 100;

//出題時選擇題目的方式 true:亂數選題  false:按題庫順序
select_questions_in_random = false; 

//聲音檔路徑的前置網址
//也就是會為 questionLines 的左欄前面自動加上的字串
//
// English 1200
soundBaseURL = 'https://gsyan888.github.io/english1200/';

//是否使用 TTS 的語音
tts_enabled = true;

//----------------
//Google TTS 文字轉語音的設定
//----------------
tts_language = 'en';  // en : 英語,   zh_tw : 中文
tts_speed = 0.3;  //語音的速度 0 ~ 1 (可用小數)
tts_base_url = 'https://translate.google.com/translate_tts?ie=UTF-8&tl='+tts_language+'&client=tw-ob&ttsspeed='+tts_speed+'&q=';

//-------------------------------
//用來偵測換行字元用的測試區塊
//請勿更動
//並且放在題庫設定區塊之前
//-------------------------------
//測試區塊開始
CR_LF_test = function(){/*--這一行請勿更改--
CR_LF testing block
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2,-9);
CR_LF_First_Pos = CR_LF_test.indexOf('_LF')-'CR_LF'.indexOf('_LF');
//測試區塊結束
//-------------------------------


//題庫
//欄位分隔符號為兩個井字號(##)
seperator = '##';

//左欄為聲音檔路徑
//右欄為中文
questionLines = function(){/*--這一行請勿更改--
dragon##龍
boat##船
race##賽跑，速度競賽
dragon boat race##划龍舟賽
rice##米
dumpling##水餃
rice dumpling##粽子
festival##節日
Dragon Boat Festival##龍舟節，端午節
carnations##康乃馨
Mother's Day##母親節
BBQ party##烤肉派對
watch the moon##賞月
cake##蛋糕
moon cake##月餅
Jade Rabbit##玉兔
pomelo##柚子
Moon Festival##月亮節，中秋節
hunt##打獵
Easter##復活節
Easter bunny##復活節兔
Easter egg hunt##福活節尋找彩蛋
go egg hunting##去找彩蛋
trick-or-treat##不給糖就搗蛋
Halloween##萬聖節前夕
turkey##火雞
potatoes##馬鈴薯
Thanksgiving##感恩節
fire##火
cracker##餅乾，炮竹
firecracker##鞭炮
Chinese New Year##中國新年，春節
eve##前夕，前一夜
New Year's Eve##新年的前夕，除夕
hot pot##火鍋
hot dog##熱狗
family##家庭，家人
reindeer##麋鹿
church##教堂
Santa Claus##聖誕老人
Christmas##聖誕節
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
