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
main##主要的
group##群體、組
punish##責罰、處罰
punisher##執行處罰的人
self##自己、自身
suffer##遭受、經歷、受苦
sufferer##受害者
tantalize##逗弄、折磨、吊人胃口
tantalizer##折磨者
Emotional blackmailers include four main groups: punishers, self-punishers, sufferers, and tantalizers. ##情緒勒索者包含四種類型：施暴型、自虐型、悲情型、欲擒故縱型。
spin##吐絲、旋轉、編造
fault##過錯
Emotional blackmailers from any group may spin the problem to make it seem like the other person's fault.##任何一種類型的情緒勒索者都會轉移問題，讓這些問題看起來像是他人的錯。
threaten##威脅
demand##需求
refuse##拒絕
A punisher threatens to punish others if their demands are refused. ##施暴者的需求被拒絕時，會利用懲罰他人作為威脅。
harm##傷害
Self-punishers threaten to harm themselves to make the other person feel they have to help them. ##自虐者會以傷害自己作為威脅，來讓別人認為他們需要幫助這個人。
solve##解決
Sufferers make it seem like the other person can solve their problems.##悲情者讓別人看似能解決問題。
fell guilty##感到罪惡
They may cry to make the other person feel guilty. ##他們可能會哭泣來讓他人感到罪惡。
pose##提出、擺姿勢
quid pro quo## (拉丁文)交換條件、賠償
Tantalizers pose threats as quid pro quo, such as "If you do this thing for me, I'll do something nice for you." ##欲擒故縱者會用威脅當作籌碼，像是「如果你為我這樣做，我就會給你好處」，
cycle##循環
repeat##重複
It seems like a gift, but the cycle keeps repeating with more and more demands. ##乍聽像是個禮物，但這個循環會伴隨越來越多的要求不斷重複。
end##結束、終點
bring A to an end##把 A 做結束
How can you bring emotional blackmail to an end?##要如何結束情緒勒索？
firm##[形]結實的、堅固的、確定的、強硬的 [名]公司
firmly##堅固地、堅決地
express##表達
boundary##界線
Firmly express your boundaries. ##你要堅決地表示你的界限，
right## [名]對的、正確的 [名]權利
You have the right to say "no."##你有權利說「不」，
talk##談話
You can also try talking to the person to solve the problem. ##也能嘗試告訴他人來解決問題。
capable##有能力的
therapist##治療師
assist## 協助
approach## [動]靠近、處理 [名]方法
Also, a capable therapist can assist you with all these approaches. ##此外，有能力的治療師能用盡所有的辦法幫助你。
walk##走路
walk away##走開、脫身
relationship##關係
If nothing works, it's best to walk away from the relationship.##如果都沒有用，你最好要遠離這段關係。
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
