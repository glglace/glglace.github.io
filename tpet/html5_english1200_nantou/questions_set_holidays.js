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
ocean##洋(指陸地以外的大範圍海域，如大西洋、太平洋)
sea##海(指陸地邊緣的海域，如東海、黃海、日本海)
seal##海豹；印章；密封條
piano##鋼琴
pianoist##鋼琴家
science##科學
scientist##科學家
save##拯救；保存；儲蓄
earth##地球；土地
Seals are Doing What Scientists Can't to Help Save the Earth##[文章標題]海豹正在做科學家無法做的事:幫助拯救地球。
surface##表面
temperature##溫度
rice##米
rise##上升
sunrise##日出
quick##快的(時間上短暫)
fast##快的(指速度)
fast food##速食
Earth's surface temperatures are rising, and rising quickly. ##地球表面的溫度正在上升，而且上升得很快。
danger##[名] 危險
dangerous##[形] 危險的
problem##問題；困難
reason##原因
This is a dangerous problem for many reasons. ##這是一個危險的問題，原因很多。
major##主要的
because##因為
[A] cause [B]##[A事件] 引起、造成 [B事件]
sheet##紙張、床單、薄片
ice sheet##冰層
melt##融化
One major reason is that it causes ice sheets to melt. ##其中一個主要的原因是它造成冰原融化。
It's your turn.##輪到你了。
Because there is only one bathroom,we take turns to use it.##因為只有一間浴室，所以我們輪流使用。
in turn##接下來
[A] cause [B]##[A事件] 引起、造成 [B事件]
level##水平面、層級
sea level##海平面
rise##上升
result##[名] 結果、成果
[A] result from [B]##[B事件] 導致 [A事件]
[A] result in [B]##[A事件] 導致 [B事件]
food##食物
floor##地板、樓層
flood##洪水氾濫
In turn, this causes sea levels to rise, which results in floods. ##這樣會引起海平面上升，從而導致洪水發生。
environmental changes##環境改變
find out## 找出;了解
Antarctica##南極洲
Because of these dangers, scientists are trying to find out more about environmental changes in places such as Antarctica. ##因為這些危險，科學家們正試圖了解更多關於環境改變，在像是南極洲等地。
temperature##溫度
too...to...##太...以至於不能...
humans##人類
However, winter temperatures are often too cold for humans to work there.##然而，冬天的氣溫往往太低以致於人類無法在那裡工作。
overcome##克服
University##大學
St. Andrews##聖安德魯斯
Scotland##蘇格蘭
To overcome this problem, scientists from the University of St. Andrews in Scotland are using seals to help.##為了克服這個困難，來自蘇格蘭聖安德魯斯大學的科學家們利用海豹來幫忙。
glue##黏
harm##傷害、損害
harmless##無害的
sensors##感測器
record##紀錄
sea##海
seal##海豹
ecology##生態
They glue harmless sensors to the backs of the seals' heads to record the sea's ecology.##他們將無害的感應器黏在海豹後腦杓上，以記錄海洋的生態。
Weddell seals##威德爾海豹
southern elephant seals##南象鼻海豹
choose##選擇(原形動詞)
chose##選擇(過去式)
chosen##被選擇(過去分詞、被動式)
project##計畫
Weddell and southern elephant seals have been chosen for this project. ##威德爾海豹和南象鼻海豹被選來執行這個計畫，
specie##物種、品種
dive##潛水
deep##深的
deeper##更深的
They're the only seal species in Antarctica that dive to the deeper parts of the ocean. ##因為牠們是南極洲唯一潛入海洋深處的海豹品種。
begin##開始(原形動詞)
began##開始(過去式)
begun##開始(過去分詞、被動式)
fewer than##少於
data##資料
report##報告
Amundsen Sea area##阿曼森海區域
Antarctica##南極洲
When the project began in 2014, there were fewer than 1,000 data reports from Antarctica's Amundsen Sea area.##在 2014 年計畫剛開始時，有關南極洲阿曼森海區域的數據報告，不到一千筆。
Now, thanks to the seals' work, there are more than 20,000. ##現在，多虧了海豹們的工作，已經有超過兩萬(筆數據資料了)。
get a better idea##更了解
about##關於
damage##損害
This data will help scientists get a better idea about the damage that rising temperatures are causing.##這些數據資料將幫助科學家們更加了解溫度上升所帶來的傷害。
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
