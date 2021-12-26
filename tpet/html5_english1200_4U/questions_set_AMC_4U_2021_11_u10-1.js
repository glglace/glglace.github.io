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
Emotional ## 情緒的
Black mail ## 黑色的郵件
Blackmail ## 勒索、敲詐 (海盜向蘇格蘭農民收保護費)
Don't Be a Victim of Emotional Blackmail##[文章標題]不要成為情緒勒索的受害者
use used used ## 使用
control ## 控制
someone ## 某人
someone else## ㄑ他人
Have you ever been the victim of emotional blackmail, or used it to control someone else?##你曾是情緒勒索的受害者嗎？或是你曾用情緒勒索控制他人嗎？
even ## 甚至
consciouse ## 有意識的
unconsciouse ## 昏迷的、不省人事的
You might not even be conscious of it.##也許你根本沒有意識到。
##
##
##
##
Emotional blackmailers use fear, obligation, and guilt to influence the way 
someone acts. ##情緒勒索者利用恐懼、人情債以及罪惡感來影響別人的行為，
##
##
##
##
This usually happens between people in close relationships, like couples, parents and children, and close friends. ##這通常發生在親密的人際關係中，如情侶之間、父母及孩子之間以及朋友間。
##
##
##
##
First, the emotional blackmailer makes a demand, like "You must stop being friends with that person." ##一開始，情緒勒索者會做出像這樣的要求：「你絕對不能跟那個人當朋友。」
##
##
##
##
You'll likely resist, which makes the emotional blackmailer put more pressure on the demand. ##你可能會拒絕，使得情緒勒索者又施加更多的壓力，
##
##
##
##
They may make threats like, "If you see that person again, I'll stop loving you." ##他們可能會威脅你：「如果你再跟他見面，我就不愛你了。」
##
##
##
##
If you obey, the emotional blackmailer will continue to have the upper hand.
##如果你順從他，情緒勒索者就佔有優勢。
##
##
##
##
People who experience emotional blackmail learn that it's easier to give in than deal with constant threats and pressure. ##曾遭受情緒勒索的人會學到屈服比應付不斷的威脅及壓力還容易，
##
##
##
##
They feel afraid to disagree with their emotional blackmailers and feel an obligation to give in. ##他們害怕反對情緒勒索者，且覺得有義務屈服，
##
##
##
##
They may feel the only way they can earn the other person's love is by letting them win.##他們認為唯一能獲得他人的愛的方式就是讓他人贏。
##
##
##
##
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
