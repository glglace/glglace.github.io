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
Protection##保護
Group##團體
Import##進口
Giraffe##長頸鹿
Animal Protection Groups Want to Stop Tainan Zoo from Importing Giraffes##揭頑皮世界黑歷史！　動保團體反對該園引進長頸鹿
A call on B to C## A 要求 B 去做 C事情
government##政府
reject##拒絕
Animal protection groups in Taiwan have called on the government to reject a plan to import giraffes.##臺灣的動物保護團體要求政府回絕一項進口長頸鹿的計畫。
Wanpi World ## 頑皮世界
Safari zoo ## 野生動物園
Tainan ## 台南
apply  ## 申請
receive  ## 接收
permit ## 許可 
The Wanpi World Safari Zoo in Tainan has applied to import 18 giraffes and has already received a permit. ##臺南的頑皮世界野生動物園已經提出申請要進口十八隻長頸鹿，並獲得了許可。
Eswatini ## 史瓦帝尼
southern ## 南方的 
The giraffes would be imported from Eswatini, a country in southern Africa. ##這些長頸鹿會從史瓦帝尼進口，那是位於南非的國家。
plan ## 計畫
trouble  ## 麻煩
history  ## 歷史
The groups want these plans rejected because of the zoo's troubled history.##因為該動物園曾有過諸多問題，所以動保團體希望此計畫能被否決。
present ## 發表、呈現 
represent ## v. 代表
Representative ## n. 代表（人） 
point ## n. 點
point out ## v.指出
average  ## 平均的、一般的
up to  ## 小於或等於， 例如 up to ten 小於等於十
Representatives for the groups point out that the average giraffe can live up to 30 years.##動保團體的代表們指出長頸鹿的平均年齡可達三十年，
most  ## 大多數的
however  ## 然而
short  ## 短的、矮的
span  ## 某個事情或動作的存續時間
Most of the giraffes at this zoo, however, have shorter life spans. ##但該園多數長頸鹿的壽命都比較短。
also  ## 此外、還有
die  ## 死亡
disease  ## 疾病
accident  ## 意外
Also, in the last ten years, four giraffes at the zoo have died from disease or accidents. ##另外，園區已有四隻長頸鹿在近十年內死於疾病或意外。
claim  ## 聲明、宣稱
provide  ## 提供
proper  ## 正確的、適當的、妥善的
medical  ## 醫療的
care  ## 照顧
They claim that the zoo has not provided proper medical care to its animals. ##他們聲稱該園並未提供動物適當的醫療照護。
harsh  ## 嚴峻的
display  ## 展示
environment ## 環境 
Also, the animals have been put in harsh display environments. ##此外，這些動物被暴露在嚴峻的展示環境當中。
in addition  ## 還有
visit  ## 參觀、拜訪
visitor ## 遊客
pay  ## 付費
feed  ## 餵
risk  ## 風險
In addition, they claim the zoo lets visitors pay to feed the animals, putting the giraffes at risk.##他們還說該園讓遊客付費餵食動物，置長頸鹿於不利的環境。
respond  ## 回應
near  ## 靠近的
nearly  ## 將近的、幾乎
prove  ## 證明
improve  ## v.改善
improvement ## n.改善 
The zoo responded that they have made nearly 20 improvements since last year,##頑皮世界則回應，他們從去年開始已經做了將近二十項的改善措施，
change ## 改變
condition ## 條件
and that more changes will come to improve animal conditions. ##接下來還會繼續針對改善動物生存條件做更多改革。
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);