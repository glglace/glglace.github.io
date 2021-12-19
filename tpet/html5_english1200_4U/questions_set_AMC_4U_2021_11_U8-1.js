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
why##為什麼
Tutankhamun##圖坦卡門
tomb##墳墓
continue##繼續
excite##使...興奮
people##人們
Why Tutankhamun's Tomb Continues to Excite People##揭開圖坦卡門陵墓的神秘面紗
picture## [名]照片、圖片 [動]想像一下那是什麼畫面
ancient## 古代的
Egypt##埃及
Egyptian##埃及的、埃及人
Picture an ancient Egyptian.##幻想一位古埃及人時，
might be##可能是、可能會
image##[名]畫面 [動]想像一下那是什麼畫面
pharaoh##法老
golden##金色的
mask##面具
facial mask##口罩
You might be imagining the pharaoh Tutankhamun, with his 3,300-year-old golden mask.##你可能會想像古埃及法老圖坦卡門戴著他那 3,300 年歷史的金製面具。
deeply##深深地
religious##宗教的、信仰虔誠的
show showed shown## 顯示、展示 [動詞三態]
society##社會
Ancient Egyptians were deeply religious people, and this was shown in much of their society. ##古埃及人非常地虔誠，而這也反映在他們社會上很多地方。
name##名字
named##被命名
Amun##阿蒙
god##神、上帝
Tutankhamun himself was named after Amun, the god of the sun and air. ##圖坦卡門本身是以太陽及空氣之神阿蒙的名字來命名。
literal##文字、字面
literally##字面上的
A means B## A的意思是B
living##活生生的、在世的
Tutankhamun literally means "the living image of Amun."##圖坦卡門在字面上的意思是「阿蒙神在世的形象」。
young##年輕的
youngest##最年輕的
power##能量、動力、權利
take power##掌握權力
age##年紀
dying##死亡 die 的動名詞
later##之後的
Tutankhamun was one of the youngest pharaohs, taking power at the age of nine, dying just ten years later. ##圖坦卡門是最年輕的法老之一，他在九歲時掌權，僅僅十年後就逝世，
also##也是
A is called B##A被稱為B
This is why he's also called the "Boy King."##而這也是他被稱作「男孩國王」的原因。
influence##影響力
during##在...期間
reign##統治
famous##有名的、著名的
Tutankhamun didn't have much influence on Egypt during his short reign, so why is he the most famous pharaoh of all?##圖坦卡門在他短期的統治時期內，並沒有為埃及帶來很大的影響，那為什麼他會是最著名的法老呢？
British##英國的
archaeologist##考古學家
Howard Carter##霍華 卡特
make made made##做 [動詞三態]
dramatic##戲劇性的、激動人心的
discovery##發現
tomb##墳墓
pack## [名]盒子、包裝 [動] 擠進、塞滿
A is packed of B## A 被 B 塞滿 
treasure##寶藏
In 1922, British archaeologist Howard Carter made a dramatic discovery when he found Tutankhamun's tomb packed full of treasures. ##1922 年，英國的考古學家霍華德‧卡特有一項激動人心的發現 ── 他發現圖坦卡門陵墓有滿滿的寶藏。
solid##堅硬的、實心的、純的
solid gold##純金
weigh## [動]秤重量
weight## [名]重量
over##超過
kilo##千
gram##克
kilogram##千克
The most famous is the pharaoh's mask, which is made of solid gold and weighs over ten kilograms. ##最著名的是法老的面具，由重超過十公斤的純金製作而成。
treasure##寶藏
These treasures tell us many stories of ancient Egypt. ##這些寶藏告訴我們許多古埃及的故事，
This is what has made Tutankhamun the most famous pharaoh of all. ##而這也讓圖坦卡門成為最著名的法老。
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
