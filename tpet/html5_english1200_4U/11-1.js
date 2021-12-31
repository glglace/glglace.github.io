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
Victim ## 受害者
move ## [動]移動
motion ## [名]動作
motion picture ## [名]電影、影片
emotion ## [名]情緒 (e向外的motion動作、引申文為情緒、情感)
Emotional ## [形]情緒的
Da Vinci: The Robot That's Saving Lives
 ## 醫師的幫手：達文西機械手臂
Da Vinci. What pops into your head when you read this? 
 ## 達文西。當你讀到這個名字時，腦海中浮現的是什麼呢？
Leonardo da Vinci?
 ## 李奧納多‧達文西？
Or possibly one of his famous paintings, like Mona Lisa or The Last Supper? 
 ## 或者是他的其中一幅名畫，例如《蒙娜麗莎的微笑》或《最後的晚餐》？
Well, today's topic is actually about an entirely different da Vinci — a robot.
 ## 好吧，今天的主題其實是關於一個截然不同的達文西 ── 一個機器人。
The da Vinci Surgical System was designed by an American company, Intuitive Surgical.
 ## 達文西手術系統由美國的直覺手術公司所設計。
With the guidance of a trained surgeon, the robot can perform minimally invasive surgery. 
 ## 在受過訓練的外科醫生指導下，機器人能夠執行微創手術。
The system has three or four arms that can be equipped with various surgical tools.
 ## 這項系統具備三到四隻可以配有各式手術工具的機械手臂。
It's operated remotely by a surgeon with the help of a special camera that goes inside the patient's body.
 ## 外科醫生可藉由進入患者體內的特製攝影鏡頭協助，以進行遠端操作。
The robot was given this name because Leonardo da Vinci's study of the human body led to the first robot in history. 
 ## 這個機器人是因李奧納多‧達文西而得名，因為他的人體研究促成史上第一個機器人。
Remote surgery was once looked at by NASA in the 1970s. 
 ## 美國國家航空暨太空總署在 1970 年代曾研究過遠端手術。
NASA was interested in having something that would allow surgeons on Earth to perform emergency surgery in space. 
 ## 他們有意創造一個讓身處地球的外科醫生能夠在外太空執行緊急手術的東西，
However, this idea was never realized.
 ## 然而這個想法從未實現。
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
