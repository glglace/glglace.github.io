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
Black mail ## 黑色的郵件
Blackmail ## 勒索、敲詐 (海盜向蘇格蘭農民收保護費)
Don't Be a Victim of Emotional Blackmail##[文章標題]不要成為情緒勒索的受害者
use used used ## 使用
control ## 控制
someone ## 某人
someone else## 他人
Have you ever been the victim of emotional blackmail, or used it to control someone else?##你曾是情緒勒索的受害者嗎？或是你曾用情緒勒索控制他人嗎？
even ## 甚至
consciouse ## 有意識的
unconsciouse ## 昏迷的、不省人事的
You might not even be conscious of it.##也許你根本沒有意識到。
tear##眼淚
dear##親愛的
fear##恐懼
oblige##強迫、迫使
obligation##義務、職責、債務
gulit##犯罪、過失、內疚
influence##影響
influencer##有影響力的人、網紅
Emotional blackmailers use fear, obligation, and guilt to influence the way someone acts. ##情緒勒索者利用恐懼、人情債以及罪惡感來影響別人的行為，
usual##[形]通常的
casual##[形]非正式的、臨時的、偶然的
usually##[副]通常地
happen##發生
between##在...之間
close the door##關門
His house is close to the supermarket.##他家靠近超級市場。
close friend##親密的朋友
relationship##人際關係
couple##一對、夫妻
This usually happens between people in close relationships, like couples, parents and children, and close friends. ##這通常發生在親密的人際關係中，如情侶之間、父母及孩子之間以及朋友間。
demand##需求、要求
video on demand##隨選視訊
First, the emotional blackmailer makes a demand, like "You must stop being friends with that person." ##一開始，情緒勒索者會做出像這樣的要求：「你絕對不能跟那個人當朋友。」
resist##反抗、抗拒
press##[動]按、壓、擠
press##[名]新聞報刊
presure##壓力
president##總統、董事長、會長、主席
You'll likely resist, which makes the emotional blackmailer put more pressure on the demand. ##你可能會拒絕，使得情緒勒索者又施加更多的壓力，
threat##威脅
They may make threats like, "If you see that person again, I'll stop loving you." ##他們可能會威脅你：「如果你再跟他見面，我就不愛你了。」
obey##遵守、順從
up##向上
upper##上面的、上層的
upper class##上流社會
upper grade##高年級
lower grade##低年級
upper hand##上面那隻手、上風、有利的位置
If you obey, the emotional blackmailer will continue to have the upper hand.##如果你順從他，情緒勒索者就佔有優勢。
experience##經驗
give in##屈服、讓步、投降
give up##放棄
give out##分發、用完
deal##分配、發牌、交易
deal with##處理、對待
constant##持續的
People who experience emotional blackmail learn that it's easier to give in than deal with constant threats and pressure. ##曾遭受情緒勒索的人會學到屈服比應付不斷的威脅及壓力還容易，
afraid##害怕的
agree##同意
disagree##不同意
They feel afraid to disagree with their emotional blackmailers and feel an obligation to give in. ##他們害怕反對情緒勒索者，且覺得有義務屈服，
earn##賺取、贏得
let##讓
win##贏
They may feel the only way they can earn the other person's love is by letting them win.##他們認為唯一能獲得他人的愛的方式就是讓他人贏。
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
