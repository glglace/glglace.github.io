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
Da Vinci ## 達文西
Robot ## 機器人
save, saving ## [動]拯救 [動名詞] 拯救 
lives ## [名]生命 
Da Vinci: The Robot That's Saving Lives ## 醫師的幫手：達文西機械手臂
pop ## 爆開、流行音樂、汽水
pop into ## 很快的跳進 
Da Vinci. What pops into your head when you read this? ## 達文西。當你讀到這個名字時，腦海中浮現的是什麼呢？
Leonardo da Vinci? ## 李奧納多‧達文西？(電影男演員)
possible ## 可能的
impossible ## 不可能的
possibly ## 可能地
famous ## 有名的
paintings ## 油畫
Mona Lisa ## 蒙娜麗莎（的微笑）
Last Supper ## (耶穌和十二個門徒)最後的晚餐
Or possibly one of his famous paintings, like Mona Lisa or The Last Supper?  ## 或者是他的其中一幅名畫，例如《蒙娜麗莎的微笑》或《最後的晚餐》？
top ## 山頂、頂端
topic ## 主題
act ## 行動
fact ## 事實
actual  ## [形]事實的、實際的
actually ## [副]實際上地
tire ## 輪胎
entire  ## [形]全部的
entirely ## [副]全部地
different ## [形]不同的
Well, today's topic is actually about an entirely different da Vinci — a robot. ## 好吧，今天的主題其實是關於一個截然不同的達文西 ── 一個機器人。
surgeon ## [名] 外科醫生
surgery ## [名] 外科手術
surgical ## [形] 手術的
system ## [名] 系統
design, designed ## 設計 、 被設計
company ## 公司 
intuitive ## 直覺的 
The da Vinci Surgical System was designed by an American company, Intuitive Surgical. ## 達文西手術系統由美國的直覺手術公司所設計。
guide ## 指引、帶領
guidance ## 指導
train ## 火車
train 、 trained ## 訓練 、 有受過訓練的
perform ## 執行、表現
mini ## 迷你的
minimal ## [形] 最小限度的、最低限度的
minimally ## [副] 最小限度地、最低限度的地
invasive ## 侵略性的、攻擊性的
With the guidance of a trained surgeon, the robot can perform minimally invasive surgery.  ## 在受過訓練的外科醫生指導下，機器人能夠執行微創手術。
equipment ## 設備、裝備
A equips B with C ## A 用 C 來裝備 B
A is equipped with C ## A 被用 C 來裝備
varous ## 多種的、多樣的
surgical ## [形] 手術的
tools ## 工具
The system has three or four arms that can be equipped with various surgical tools. ## 這項系統具備三到四隻可以配有各式手術工具的機械手臂。
operate ## 操作
be operated ## 被操作 
remote ## 遠距的
cotrol ## 控制
remote control  ## 遙控
remotely  ## 遠距地
special  ## 特別的
camera  ## 照相機
inside  ## 裡面
patient  ## 病人
body  ## 身體
It's operated remotely by a surgeon with the help of a special camera that goes inside the patient's body. ## 外科醫生可藉由進入患者體內的特製攝影鏡頭協助，以進行遠端操作。
give gave given ## [動詞三態] 給
study ## 讀書、研究 
led to ## 導致、促使
history ## 歷史
The robot was given this name because Leonardo da Vinci's study of the human body led to the first robot in history.  ## 這個機器人是因李奧納多‧達文西而得名，因為他的人體研究促成史上第一個機器人。
remote surgery ## 遠距手術
once ## 曾經 
once upon a time ## 很久很久以前 （童話故事慣用的開場白） 
NASA  ## 美國航空太空總署
Remote surgery was once looked at by NASA in the 1970s.  ## 美國國家航空暨太空總署在 1970 年代曾研究過遠端手術。
A is interested in B ## A 對 B 有興趣
A is interesting to B ## 對 B 來說，A 是有趣的
allow ## 允許
perform ## 執行
emergency ## 緊急的 
surgery ## [名] 外科手術
space ## 空間
in space ## 在太空中
NASA was interested in having something that would allow surgeons on Earth to perform emergency surgery in space.  ## 他們有意創造一個讓身處地球的外科醫生能夠在外太空執行緊急手術的東西，
real ## 真實的
realize ##  理解、認識、實現
realized ##  被理解的、已經實現的
However, this idea was never realized. ## 然而這個想法從未實現。
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
