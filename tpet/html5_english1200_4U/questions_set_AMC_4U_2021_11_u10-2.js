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
1
00:00:01,110 --> 00:00:04,310
Don't Be a Victim of Emotional Blackmail
以愛之名的傷害 ── 情緒勒索

2
00:00:05,380 --> 00:00:13,680
Emotional blackmailers include four main groups: punishers, self-punishers, sufferers, and tantalizers. 
情緒勒索者包含四種類型：施暴型、自虐型、悲情型、欲擒故縱型。

3
00:00:14,140 --> 00:00:20,440
Emotional blackmailers from any group may spin the problem to make it seem like the other person's fault.
任何一種類型的情緒勒索者都會轉移問題，讓這些問題看起來像是他人的錯。

4
00:00:20,850 --> 00:00:25,460
•A punisher threatens to punish others if their demands are refused. 
•施暴者的需求被拒絕時，會利用懲罰他人作為威脅。

5
00:00:25,890 --> 00:00:31,810
•Self-punishers threaten to harm themselves to make the other person feel they have to help them. 
•自虐者會以傷害自己作為威脅，來讓別人認為他們需要幫助這個人。

6
00:00:32,180 --> 00:00:36,960
•Sufferers make it seem like the other person can solve their problems.
•悲情者讓別人看似能解決問題。

7
00:00:37,040 --> 00:00:40,720
They may cry to make the other person feel guilty. 
他們可能會哭泣來讓他人感到罪惡。

8
00:00:41,190 --> 00:00:48,830
•Tantalizers pose threats as quid pro quo, such as "If you do this thing for me, I'll do something nice for you." 
•欲擒故縱者會用威脅當作籌碼，像是「如果你為我這樣做，我就會給你好處」，

9
00:00:49,110 --> 00:00:54,540
It seems like a gift, but the cycle keeps repeating with more and more demands. 
乍聽像是個禮物，但這個循環會伴隨越來越多的要求不斷重複。


10
00:00:55,110 --> 00:00:58,260
How can you bring emotional blackmail to an end?
要如何結束情緒勒索？

11
00:00:58,470 --> 00:01:01,240
Firmly express your boundaries. 
你要堅決地表示你的界限，

12
00:01:01,390 --> 00:01:03,480
You have the right to say "no."
你有權利說「不」，

13
00:01:03,850 --> 00:01:07,580
You can also try talking to the person to solve the problem. 
也能嘗試告訴他人來解決問題。

14
00:01:07,950 --> 00:01:12,630
Also, a capable therapist can assist you with all these approaches. 
此外，有能力的治療師能用盡所有的辦法幫助你。

15
00:01:12,820 --> 00:01:17,310
If nothing works, it's best to walk away from the relationship.
如果都沒有用，你最好要遠離這段關係。


why##為什麼
Tutankhamun##圖坦卡門
tomb##墳墓
continue##繼續
excite##使...興奮
people##人們
Why Tutankhamun's Tomb Continues to Excite People##揭開圖坦卡門陵墓的神秘面紗
game over##遊戲結束
over there##在那裡
over one year##超過一年
early##早的
death## [名]死亡
remain##保持
mystery##謎、神秘的事物
Over the years, Tutankhamun's early death has remained a mystery. ##這些年來，圖坦卡門的早逝始終成謎。
expert##專家
theory##理論
theories##理論(複數)
break## [原形動詞]中斷、打破、弄壞
broke## [過去式動詞]中斷、打破、弄壞
broken##[過去分詞]中斷、打破、弄壞
chariot##雙輪馬車
accident##意外、事故
Many experts have had many theories, from a broken leg to a chariot accident. ##許多專家一直持有很多看法，從一條骨折的腿到雙輪馬車的事故都有，
theories##理論(複數)
prove##[原形動詞]證明
proven##[過去分詞]被證明
clue##線索
conclude##[原形動詞]以...做結束
conclusive##[形容詞]有結論性的、不用懷疑的
probably##也許
reason##原因
behind##在 ... 後面
behind me##在我後面
pharaoh##法老
death## [名]死亡
However, none of these theories have proven conclusive, and we'll probably never know the real reason behind the pharaoh's death.##但沒有一項推測能被證實，而我們也大概永遠不會知道法老真正的死因。
likely##很可能的，可能要發生的
It's likely##這很可能是
though##雖然
thought## 想法 think 動詞轉名詞
born##[過去分詞]出生
major##主要的
mayor##市長
ill##生病的
illness##[名]疾病
cause##造成、導致
It's likely, though, that Tutankhamun was born with a major illness that caused his early death.##儘管如此，圖坦卡門很有可能是在出生時就患有嚴重疾病，造成他的早逝。
interest## 興趣
A is interesting to B## B人 對 A事有興趣
A is interested inB## A人 對 B事有興趣
relate## [動]關係
related## [形]有關係的
relation## [名]關係
relative## [名]親戚
The pharaoh's death isn't the only interesting death related to Tutankhamun. ##法老的逝世並不是唯一一個和圖坦卡門有關且受到關注的死亡。
since##自從
cover##蓋子、掩蓋
discover##[動]發現
discovery##[名]發現
tomb##墳墓
talk##談話
curse##詛咒
pharaoh##法老
Since the discovery of his tomb, people have talked about a "curse of the pharaohs." ##自從他的陵墓被發現以來，人們就有在談論關於「法老的詛咒」。
Lord##主人、勳爵、爵位
Carnarvon##卡那封
enter##進入
In 1923, Lord Carnarvon was one of the first people to enter the tomb. ##1923 年，卡那封勳爵是其中一位最早進入陵墓的人，
month##月
late##遲到的、晚的
later##稍後的、稍晚的
die##死
mosquito##蚊子
bite##咬
Two months later, he died from a mosquito bite. ##而他在兩個月後死於蚊子的叮咬。
consider##考慮
considerable number##相當多的數量
other##其他
A considerable number of other people who had been in the tomb also died from illnesses. ##許多其他曾經進入陵墓的人也都死於疾病，
result##結果
news##新聞
newspaper##報紙
begin##開始
write##寫
story, stories##故事
claim##宣稱、宣告
whoever##不論是誰
disturb##打擾
soon##很快的
As a result, newspapers began to write stories claiming that whoever disturbs the tomb will soon die.##因此報社開始撰寫報導，斷言凡是打擾過陵墓的人都會很快死去。
next##下一個
mark##記號
on the mark##體育比賽時的口令：各就各位
since##自從
discovery##發現
Next year marks 100 years since the discovery of Tutankhamun's tomb. ##明年是圖坦卡門陵墓被發現的一百週年。
mystery, mysteries## 謎、神秘的事物
ancient##古代的
continue##繼續
around##在...周圍
around the world##全世界
to this day##直到如今
The mysteries of the ancient pharaoh continue to interest people around the world to this day. ##直至今日，古埃及法老的神秘持續地引起世界各地人們的興趣。
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
