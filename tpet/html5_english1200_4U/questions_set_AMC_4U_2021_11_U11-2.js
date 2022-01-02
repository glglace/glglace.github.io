//每題有幾個選項
numberOfOptions = 3;

//每列最多可以有幾個選項
numberOfOptionsPerRow = 1;	

//是否自動顯示選項供作答(預設為 true; false 時需按[開始作答]鈕才會出現選項)
auto_show_options = false;

//每回合抽幾題題目
numberOfQuestionsPerRound = 200;

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
develop ## [動] 發展
envelope ## [名] 信封
red envelope ## [名] 紅包
hong bao ## [名] 紅包
surgeon ## [名] 外科醫生
surgery ## [名] 外科手術
surgical ## [形] 手術的
system ## [名] 系統
begin began begun ## [動詞三態] 開始 
Development of the da Vinci Surgical System began in the 1990s,## 達文西手術系統的開發始於 1990 年代，
give gave given ## [動詞三態] 給
prove ## [動] 證明、檢驗
approve ## [動]批准、許可 
approval ## [名]批准、許可  
and the system was given Food and Drug Administration (FDA) approval in 2000. ## 而這項系統在 2000 年獲得美國食品藥物管理局的核可。
although ## 雖然 
robotic ## [形]機器人的
system ## 系統 
gain ## 獲得、取得
approval ## [名]批准、許可 
scope ## [名]範圍、視野 [動]觀察、審視
laparoscopic ##[形]腹腔鏡的 
surgery ## [名] 外科手術
Although it wasn't the first robotic surgical system to gain FDA approval, it was the first to do laparoscopic surgery. ## 雖然它不是第一個獲得美國食品藥物管理局核可的機器人手術系統，卻是第一個執行腹腔鏡手術的機器人系統。
perform ## 執行
increase ## 增加
almost ## 幾乎
In Taiwan, the number of surgeries performed by da Vinci systems increased by almost 2,000% from 2009 to 2017. ## 自 2009 年到 2017 年間，達文西手術系統在臺灣執行的手術量成長了將近 2,000%。
surgical ## [形] 手術的
benefit ## 好處、益處
patient ## 病人
tradition ## 傳統
traditional ## 傳統的
method ## 方法
The da Vinci Surgical System offers a number of benefits to patients over traditional surgery methods. ## 和傳統的手術方法相比，達文西手術系統可以為患者帶來一些好處。
reduce ## 減少
chance ## 機會
accident ## 意外
accidental ## 意外的
harm ## 傷害
cover ## 蓋子、覆蓋
recover ## 恢復、復原
It reduces the chances of accidental harm, and reduces recovery times. ## 它減少意外傷害的可能性，也縮短術後復原時間。
claim ## 宣告、聲稱
reduce ## 減少
patient ## 病人
blood ## 血液
loss ## 損失
despite ## 雖然
suggest ## 建議
case ## 盒子、箱子、案件
this is not the case ## 並不是這樣 
Some doctors also claim that it reduces patient blood loss, despite some studies suggesting that this is not the case. ## 有些醫生也聲稱這項系統可以減少患者的出血量，然而部分研究顯示並非如此。
benefit ## 好處、益處
There are also benefits for doctors who use the system. ## 對於使用這項手術系統的醫生而言，也有一些好處。
allow ## 允許
easy, easier ## 容易的、更容易的
entry ## 進入口
patient ## 病人 
Da Vinci allows easier entry into patients' bodies, ## 達文西手術系統讓進入患者體內變得更為容易，
camera ## 相機 
surgeon ## [名] 外科醫生
nake ## 裸體的
naked eye ## 裸眼 
and its special cameras allow surgeons to see more than with the naked eye. ## 而且它特製的攝影鏡頭能夠讓外科醫生取得比肉眼更廣的視野。
various ## 多種的、多樣的
perform ## 執行
surgery ## [名] 外科手術
Its various arms also make performing surgery easier. ## 它的許多隻手臂也讓執行手術變得更加簡單。
progress ## 進步
robotic ## [形]機器人的
surgery ## [名] 外科手術
solution ## [名] 解決方案 
continue ##  繼續
safe, safer ## 安全的、更安全的
Progress in robotic surgery solutions, like da Vinci, will continue to make surgery safer for everyone. ## 像達文西這類的機器人手術系統的進步，將會持續帶給人們更安全的手術。
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
