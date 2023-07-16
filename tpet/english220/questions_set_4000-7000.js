
caption ='4000~7000單刷題機';

//每題有幾個選項
numberOfOptions = 4;

//每列最多可以有幾個選項
numberOfOptionsPerRow = 1;	

//每回合抽幾題題目
numberOfQuestionsPerRound = 10;

//出題時選擇題目的方式 true:亂數選題  false:按題庫順序
select_questions_in_random = true; 


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
abbey ## n.修道院
abbreviation ## n.縮略語
abide ## v.遵守
abnormal ## adj.反常的
abolish ## v.廢除
abolition ## n.廢除
aboriginal ## adj. adj.原住民的
aborigine ## n. 土著居民
abortion ## n.墮胎
absorbing ## adj.極有趣的
abstraction ## n.心不在焉/抽象概念
absurd ## adj.荒唐的
abundance ## n.豐富
acceleration ## n.加速
accessible ## adj.易接近的
accessory ## n.附件
acclaim ## v./n.歡呼;歡呼聲
accommodation ## n 住所
accomplished ## adj.有才藝的
accomplishment ## n. [C]才藝;[U]完成
accord ## v.符合
accordingly ## adv. 因此
accountable ## adj. 負有責任的
accounting ## n.會計學
accumulate ## v.積累
accumulation ## n.累積
accusation ## n.控訴
accustom ## v.使習慣
ace ## n.么點牌;能手
acoustic ## adj.聽覺的
acreage ## n.英畝數
acute ## adj.敏銳的
ad ## n.廣告
adaptation ## n.適應;改編(本)
addict ## n.對~有癮的人
addiction ## n.耽溺
adequately ## adv.充分地
adjoin ## v.毗連
administrative ## adj.行政的
administrator ## n.行政官員
admiral ## n.海軍將官
adolescence ## n.青春期
adolescent ## adj./n.青春期的;青少年
advancement ## n.前進;擢升
adverse ## adj.反對的
advert ## v.提及
advertising ## n.廣告業
advisory ## adj.提供忠告的
advocate ## n./v.提倡者;擁護
aerospace ## n.航空太空(包括大氣層內外)
aesthetic ## adj.美感的
affection ## n.愛情
affiliated ## adj.相關聯的
aftermath ## n.餘波
agenda ## n.議程
aggregate ## n.總數
aggression ## n.侵略
aging ## adj.變老的
agony ## n.痛苦
aide ## n.助理
airforce ## n.空軍
air-tight ## adj.密封的
airway ## n.航空公司;航線
aisle ## n.通道
akin ## adj.類似的
alarming ## adj.令人憂心的
alas ## interj.哎呀(表悲傷或恐懼)
albeit ## adv.儘管
alcoholic ## n./adj.酒精飲料;含酒精的
algebra ## n.代數
alien ## adj.外國的
alienate ## v.使不和
alienation ## n.離間;疏遠
allegation ## n.宣稱
allege ## v.聲稱
allergy ## n.過敏性反應
alliance ## n.聯盟
allied ## adj.同盟的
allocate ## v.撥給
allocation ## n.配給
allot ## v. 分配
alongside ## prep./adv.靠著...旁邊
alteration ## adj.更動
alternate ## adj./v. 輪流的
alternative ## adj.替代的;二擇一的
alternatively ## adv.二擇一地
altitude ## n.高度
aluminum ## n.鋁
amazing ## adj.令人驚訝的
ambiguity ## n.意義含糊
ambiguous ## adj.含糊的
ambush ## v.埋伏突擊
amend ## v.修改
amid ## prep.在...當中
ammunition ## n.彈藥
amnesty ## n.大赦
analects ## n.語錄
analogy ## n.相似
analyst ## n.分析家
ancestral ## adj.祖先的
anchor ## n.
anecdote ## n.軼事
angler ## n.釣魚者
angular ## adj.有尖角的
anonymous ## adj.不具名的
amenna ## n.觸鬚;天線
anthem ## n.聖歌
antibiotic ## n.抗生素
antibody ## n.抗體
anticipation ## n.期盼
antique ## adj.年代久遠的
anymore ## adv.再也(不)
appal ## v.(=appall)使驚駭
appalling ## adj.令人恐懼的
appealing ## adj.迷人的
appetizer ## n.(主菜前用的) 開胃食物
applaud ## v.鼓掌
applause ## n.掌聲
applicable ## adj.適用的
appraisal ## n.評價
apprehension ## n.憂慮
apprentice ## n.學徒
apt ## adj.有...傾向的
aptitude ## n.資質
aquarium ## n.水族館
archaeology ## n.考古學
archive ## n.檔案
arena ## n.活動場所(供運動、娛樂的)
armed ## adj.武裝的
array ## n.一長列
arrogant ## adj.傲慢的
articulate ## v.清楚的表達
artillery ## n.大砲
ascertain ## v.查明
ascribe ## v.把...歸因於
aspiration ## n.願望
aspirin ## n.阿斯匹靈
aspiring ## adj.有抱負的
ass ## n.驢;蠢人
assassinate ## v.行刺
assault ## n.攻擊
assertion ## n.紙張
assertive ## adj.武斷的
assertively ## adv.武斷地
asset ## n.資產
associate ## n.夥伴
astonish ## v.使驚訝
astronomy ## n.天文學
asylum ## n.庇護(所)
attainment ## n.達到
attendant ## n.服務員
attic ## n.閣樓
auction ## n.拍賣
audio ## adj.可聽頻率的
audio-visual ## adj.視聽的
auditorium ## n.禮堂
Australia ## prop./n.澳洲
amobiography ## n.自傳
automatically ## adv.自動地
autonomy ## n.自治(權)
availability ## n.有效
avenge ## v.報...之仇
aviation ## n.航空(學)
awaking ## adj 使人覺醒的
awkwardly ## adv.笨拙地
ax ## n.斧頭
baby-sitter ## n.臨時保姆
bachelor ## n.單身漢;學士
badminton ## n.羽毛球
bail ## n.保釋(金)
bald ## adj.禿的
ballad ## n.民謠
ballot ## n.無記名投票
ballroom ## n.舞廳
ban ## v.禁止
banker ## n.銀行家
banquet ## n.宴會
baptism ## n.洗禮
barbarian ## n.野蠻人
barbershop ## n. #9l$
bargaining ## n.議價
barkeeper ## n.酒吧主人
bartender ## n.酒保
based ## adj.以...為基礎的
bass ## n.低音部
bastard ## n.私生子;令人討厭的人
bathtub ## n.浴缸
batter ## v.毀損
battlefield ## n.戰場
BBC ## n 英國廣播公司
B.C. ## n.西元前
beautify ## v.美化
beckon ## v.召喚
behalf ## n.為了...的利益;代表
behold ## v.見到
Beijing ## n./prop.北京
belongings ## n.所有物
beloved ## n.所愛的人
beneficial ## adj.有益的
besiege ## v.包圍
bestseller ## n.暢銷品
beverage ## n.飲料
beware ## v.當心
bewilder ## v.使混亂
bias ## n.成見
Biblical ## adj.聖經的
bid ## v.出價;吩咐
bikini ## n.三點式泳裝
billionaire ## n.億萬富翁
binomial ## adj.〔數〕二項式
biochemistry ## n.生物化學
biological ## adj.生物(學)的
bishop ## n.主教
bitterly ## adv.酷寒的
bitterness ## n.苦;悲傷
biweekly ## adj./adv. 兩週一次的(地)
bizarre ## adj.古怪的
blameworthy ## adj.應受責備的
bland ## adj.溫和的
blast ## n.一陣疾風
blaze ## n.烈火;光輝
bleak ## adj.陰冷(鬱)的
blink ## v.眨眼;漠視
bloc ## n.政治集團
blonde ## n.金髮白種人
blossom ## n.花(叢)
blueprint ## n.藍圖
blues ## n.勃魯斯音樂;沮喪
bluff ## n.虛張聲勢
blunder ## n.愚蠢的錯誤
blur ## v.使模糊
bodily ## adj.身體的
bodyguard ## n.侍衛
boldly ## adv.大膽地
bolt ## n.螺栓;閃電
bonus ## n.紅利
bookstore ## n.書店
boom ## n.隆隆聲;景氣
boost ## v.提升
booth ## n.售貨棚
botany ## n.植物學
boulevard ## n.林蔭大道
bound ## adj.很有可能的;準備前往...的
boxing ## n.拳擊
boycott ## v.抵制
brace ## n.支撐物
breach ## v.違犯
breakdown ## n.故障
breakthrough ## n 突破
break-up ## n.瓦解
breathtaking ## adj.使人興奮的
breeder ## n.繁殖者
brew ## v.沖泡;醞釀
bridegroom ## n.新郎
briefcase ## n.公事包
briefmg ## n.簡報
brigade ## n.旅;隊
brighten ## v.照亮
brisk ## adj.輕快的
Briton ## n.英國人
broaden ## v.加寬
brochure ## n.小冊子
broker ## n.經紀人
brood ## n.一窩
browse ## v 噹食;瀏覽
brutality ## n.野蠻
Buddha ## n.佛陀
Buddhism ## n.佛教
buffalo ## n.水牛
buffet ## v.打擊
bulb ## n. 球莖(根)
bulk ## n.大量
bully ## n.恃強凌弱者
bun ## n.小圓甜麵包;髮髻
bunk ## n.臥鋪
bunker ## n.媒倉;掩體
bureaucracy ## n.官僚
burglar ## n.竊賊
businesslike ## adj.處事務實的
butcher ## n.肉商
calf ## n.小牛
calorie ## n.卡路里
canal ## n.運河
capitalist ## n.資本家
capitol ## n.美國州議會大廈
caption ## n.說明文字
captive ## adj.被俘虜的
captivity ## n.囚禁
carbon ## n. 碳
cardinal ## n.紅衣主教
carefree ## adj.無憂無慮的
caress ## v.愛撫
carnival ## n.嘉年華會
carp ## n.鯉魚
cashier ## n.出納員
casino ## n.賭場
caste ## n.種姓(制度)
casually ## adv.漫不經心的
casualty ## n.傷亡者
catalogue ## n.目錄
catastrophe ## n.災難
catcher ## n.捕捉者
cater ## v.承包伙食
caterpillar ## n.毛蟲
causal ## adj.具有因果關係的
caution ## n.謹慎
cautious ## adj.小心的
cautiously ## adv.小心地
cavalry ## n.騎兵(隊)
CD ## n.(=compact disc)光碟
ceasefire ## n.停火協定
celebrity ## n.名人(聲)
cellar ## n.地窖
cemetery ## n.墓地
census ## n.調查
centigrade ## adj./n.攝氏(的)
ceramic ## adj.陶器(藝)的
ceremonious ## adj.拘泥形式的
certificate ## n.證書
chairwoman ## n.女主席
challenging ## adj.富有挑戰性的
champagne ## n.香檳
Chancellor ## n.司法官
changeable ## adj.易變的
chaos ## n.無秩序狀態
charitable ## adj.仁慈的
charity ## n.慈善團體
chatterbox ## n.喋喋不休的人
checkbook ## n.支票簿
check-in ## n.登記手續
check-out ## n.檢查;付款退租
checkup ## n.檢查
cheerleader ## n.啦啦隊隊長
cheers ## interj.乾杯
chef ## n.主廚
chemist ## n.化學家
chessboard ## n.西洋棋棋盤
childbirth ## n.分娩
childcare ## n.照料小孩
childlike ## adj.天真無邪的
chill ## v./adj.(使)變冷;寒冷的
chimpanzee ## n.黑猩猩
chlorine ## n.氯(氣)
choir ## n.合唱隊
cholesterol ## n.膽固醇
Christianity ## n.基督教
chronic ## adj.慢性的
chunk ## n.厚塊
churchyard ## n.教堂的庭院(墓地)
cigar ## n.雪茄
citizenship ## n.公民身分(權利)
civics ## n.公民科
civilian ## n.平民;文職人員
civilize ## v.使開化
classification ## n.分類
classmate ## n.同班同學
classroom ## n.教室
clause ## n.子句;條款
cleaner ## n.清潔工(劑)
cleaning ## n.掃除
cleanse ## v.使清潔
clergyman ## n.神職人員;牧師
click ## v.使發出聲
clinic ## n.診所
clip ## v.修剪;夾住
clockwise ## adj.順時針方向的
clockwork ## n.發條裝置
closure ## n.關閉
cluster ## n.群
clutch ## n.離合器;緊握
coalition ## n.聯合
coastguard ## n.海岸巡邏隊
coastline ## n.海岸線
cocaine ## n.古柯鹼
cock ## n.公雞
cockpit ## n.駕駛艙;鬥雞場
coed ## adj.男女合校的
coeducation ## n.男女合校的教育
coexist ## v.同時共存
coffin ## n.棺材
coincidence ## n.巧合
cola ## n.可樂類飲料
collaborate ## v.合作
colleague ## n.同事
collector ## n.收藏者
collision ## n.衝突
colonial ## adj.殖民地的
color-blind ## adj.色盲的
columnist ## n.專欄作家
comedian ## n.丑角式人物
comet ## n.彗星
comfortably ## adv.舒適地
comforting ## adj.舒適的
comic ## adj.滑稽的
coming ## n.到來
commemorate ## v.為慶祝
commend ## v.稱讚
commentary ## n.評述
commentator ## n.評論家
commodity ## n.商品
commonplace ## adj.平凡的
communal ## adj.公共的
communicative ## adj.愛說話的
communist ## n./adj./n.共產主義的;共產主義者
commute ## v.通勤
commuter ## n 通勤者
compact ## adj.緊密的
companionship ## n.交誼
comparative ## adj.相比而言的
comparatively ## adv.比較地
compartment ## n.分隔間
compass ## n.指南針;圓規
compassionate ## adj.有同情心的
compatible ## adj.相容的
compatibly ## adv.和諧地
compensate ## v.賠償
compensation ## n.補償
competence ## n.能力
compile ## v.編纂
complement ## n.補足物
complexion ## n.氣色
complexity ## n.錯綜複雜的事物
complication ## n.糾葛
comply ## v.依從
composite ## adj.混合成的
comprehend ## v.理解
comprehensible ## adj.可以理解的
comprehension ## n.理解(力)
comprehensive ## adj.廣泛的
compress ## v.壓縮
compromise ## v.妥協(方案)
compulsively ## adv.強制性地
computerize ## v.使電腦化
comrade ## n.同伴
conceal ## v.隱藏
concede ## v.讓與
conceive ## v.認為;構想
conceited ## adj.自大的
conceitedly ## adv.自負地
concession ## n.讓步
concise ## adj.簡潔的
condense ## v.使凝結(濃縮)
condom ## n.保險套
confederation ## n.同盟
confer ## v.商議;授予
confession ## n.承認
confide ## v.吐露
confidently ## adv.確信地
confidential ## adj.機密的
confirm ## v.詮實
conform ## v.遵從
conformity ## n.遵從
Confucius ## n.孔子
confused ## adj 困惑的
congressional ## adj.國會的
conjunction ## n.結合
conquest ## n.征服
conscientious ## adj.盡責的
consecutive ## adj.連續的
consensus ## n.多數人的意見
conservation ## n.保護
consolation ## n.慰藉
console ## v.安慰
consolidate ## v.鞏固
conspiracy ## n.陰謀
constable ## n.警察
constitutional ## adj.憲法的
constraint ## n.限制
consultation ## n.協商會
consumption ## n.消費
contagious ## adj.傳染性的
contaminate ## v.污染物
contemplate ## v.深思
contempt ## v.輕視
contemptible ## adj.卑劣的
contented ## adj.滿足的
contingent ## adj.因情況而變的
continuation ## n.繼績
contractor ## n.立約人
contradict ## v.否認
contradiction ## n.矛盾
controller ## n.控制者
controversial ## adj.有爭議的
convene ## v.召集
convertible ## adj.可轉換的
convict ## v./n.證明有罪;囚犯
convincing ## adj.令人信服的
convoy ## n.護送(車隊)
coordination ## n.協調
cop ## n.警察
copilot ## n.飛機副駕駛
copyright ## n.版權
corporation ## n.公司
correlation ## n.關聯
correspondent ## n./adj.通訊(記)者;一致的
corrupt ## adj./v.腐敗的;敗壞
corruption ## n.道德敗壞
cosmetic ## n./adj.化妝品;美容的
cosmic ## adj.宇宙的
cosmopolitan ## adj.世界性的
cosmos ## n.宇宙
cosy ## adj.(=cozy)溫暖舒適的
councilman ## n.議員
counsel ## n.忠告
counseling ## n.勸告
counsellor ## n.顧問
countable ## adj.可數的
countenance ## n.表情;支持
counteract ## 抵消
counterattack ## n./v.反擊
counterpart ## n.互相對應的人(物)
countless ## adj.無數的
coupon ## n.優待券
courteous ## adj.有禮貌的
courtesy ## n.有禮的舉止
courtyard ## n 庭院
coverage ## n.報導;某事所包含的範圍
cowardice ## n.膽小
coworker ## n.同事
crab ## n.蟹
crackdown ## n.取締
cram ## v.填塞
crane ## n.起重機;鶴
creativity ## n.創造力
creator ## n.創作者
credibility ## n.可信性
credible ## adj.可信的
creditable ## adj.值得稱讚的
creed ## n.信條
cripple ## n.肢體殘障者
crocodile ## n.鱷魚
crossing ## n.交叉口
crossroad ## n.十字路口
crouch ## v.蹲伏
crow ## n.烏鴉;雞啼聲
crude ## adj.未加工製造的
cruise ## n.乘船遊覽
crumble ## v.(使)碎成細屑
cub ## n.幼獸
cube ## n.立方體
cubic ## adj.立方的
cucumber ## n.黃瓜
cue ## n.反芻的食物
culminate ## v.達到頂點
cult ## n.狂熱的崇拜
cumulative ## adj.累積的
curb ## n.抑制
curfew ## n.宵禁
currency ## n.貨幣;流通
curriculum ## n.課程
curry ## n.咖哩食品
custody ## n.監管
customary ## adj.習慣上的
cylinder ## n.氣缸
damages ## n.損害賠償
dame ## n.貴夫人
damp ## adj.潮溼的
daresay ## v.我想...;也許...
darken ## v.使變黑
darkroom ## n.暗房
dart ## n.鏢;急衝
dash ## v.猛衝
data ## n.資料
daybreak ## n.黎明
daylight ## n.日光
dazzle ## v.使目眩
deafen ## v.使聽不見
dean ## n.學院院長;主任牧師
dearly ## adv.深切地
debut ## n.初次登臺
decease ## n.死亡
decency ## n.莊重
decent ## adj.得體的
deception ## n.欺騙
deceptive ## adj.虛偽的
decisive ## adj.果斷的
decree ## n.∕v.法令
dedicate ## v.奉獻
deduction ## n.推斷
deem ## v.視為
deepen ## v.加深
defect ## n.缺點
deficiency ## n.短缺
deficit ## n.赤字
defy ## v.違抗
delegate ## v.派...為代表
delegation ## n.委任
deliberately ## adv.故意地
deliberation ## n.深思
delicacy ## n.精緻
delinquent ## adj.不法行為
demo ## n.(= demonstration)遊行示威
democrat ## n.民主主義者
demon ## n.惡鬼
denial ## n.否認
denomination ## n.教派
denounce ## v.指責
depict ## v.描繪
deplete ## v.使枯竭
deploy ## v./n.布署
deport ## v.驅逐出境
depreciate ## v.跌價
deprive ## v.剝奪
descendant ## n.後代
descent ## n.下降
designate ## v.指定;任命
despairing ## adj.自暴自棄的
despise ## v.藐視
detach ## v.分開
detain ## v.拘留;耽擱
deter ## v.制止
deteriorate ## v.惡化
devalue ## v.貶值
devastating ## adj.毀滅性的
deviation ## n.偏離
diabetes ## n.糖尿病
diagnose ## v.診斷
diagnosis ## n.診斷(法)
diagram ## n.圖表(解)
dialect ## n.方言
diaper ## n.菱形花紋(布);尿布
dictate ## v.使聽寫;命令
dictation ## n. 聽寫;命令
dictator ## n.獨裁者
diehard ## n.頑固分子
differential ## n.差別
differentiate ## v.區分
diffusion ## n.擴散
digital ## adj./n.數字式的
dignify ## v.使有尊嚴
dignitary ## n.權貴
dilute ## v./adj.稀釋(的)
diplomacy ## n.外交
directory ## n.工商人名錄
disapproval ## n 反對
disapprove ## v.不贊成
disbelieve ## v.懷疑
disciple ## n.門徒
disciplinary ## adj.紀律上的
disclose ## v.露出
disclosure ## n.揭露
discomfort ## n.不舒適
discontent ## n.不滿
discouraging ## adj.令人洩氣的
discreet ## adj.考慮周到的
discrepancy ## n.不一致
discretion ## n.謹慎
discriminate ## v.辨別
disgust ## n./v.嫌惡;使厭惡
disgusting ## adj.令人厭惡的
dishwasher ## n.洗碗機
disinterested ## adj.公正的
dismantle ## v.拆卸
dismay ## v.使驚慌
dispel ## v.驅散
dispensable ## adj.可有可無的
displace ## v.移開;取代
displacement ## n.移位;取代
disposition ## n.配置
disregard ## v.漠視
disrupt ## v.擾亂
dissatisfaction ## n.不滿
dissatisfy ## v.使不快
dissident ## adj./n.持異議的(人)
dissuade ## v.勸阻
distinctively ## ad v.有特色地
distract ## v.使分心
distrust ## v.不信任
diverse ## adj.各種各樣的
diversify ## v.使多樣化
diversion ## n. 轉換
diversity ## n.多樣性
dividend ## n.股息
divorcee ## n.離了婚的女人
documentary ## n.記錄片
dogmatic ## adj.固執己見的
dole ## n./v.救濟金;分發
domain ## n.領域
donkey ## n.驢
donor ## n.捐贈者
doom ## n./v.厄運;注定
dosage ## n.劑量
doubtless ## adv.無疑地
dough ## n.生麵團
downwards ## adv.向下的
doze ## v.打瞌睡
dragonfly ## n.蜻蜓
drainage ## n.排水系統
drape ## v.覆蓋
draught ## n./v.(=draft)草圖;草擬
drawback ## n.障礙;缺點
driveway ## n.私用車道
dropout ## n.輟學者
drought ## n.乾旱
drugstore ## n.雜貨店
drunkard ## n.酒鬼
dual ## adj./n.由兩部分構成的
dubious ## adj.覺得可疑的
duke ## n.公爵
dump ## v.傾倒
dutiful ## adj.守本分的
dwarf ## n./adj.侏儒;矮小的
dweller ## n.居民
dynamite ## n.甘油炸藥
eagerly ## adv.渴望地
earplug ## n.耳塞
earthworm ## n.蚯蚓
Easter ## n.復活節
eastwards ## adv.向束
eccentric ## adj./n.古怪的(人)
eclipse ## n.(日、月)蝕
ecology ## n.生態學
economically ## adv.節約的
editorial ## n.社論
educator ## n.教育工作者
eel ## n.鰻
effectively ## adv.有效地
ego ## n.自我
elective ## adj.由選舉產生的
elemental ## adj.自然力的
elevate ## v.使提高
eligible ## adj./n.有資格的
elite ## n.精英
eloquent ## adj.雄辯的
embargo ## v./n.禁止通商
embark ## v.裝船;從事
embody ## v.包括
embryo ## n./adj.胚胎;未成熟的
emigrant ## n.移民
emission ## n.散發
empirical ## adj.憑經驗的
enchant ## v.使入迷
encyclopedia ## n.百科全書
endorse ## v.贊同
endowment ## n.天資
endurance ## n.耐力
enhance ## v.增加
enlighten ## v.敵發
enlist ## v.入伍
enrich ## v.使富裕
enroll ## v.使加入;註冊
ensue ## v.接著發生
ensure ## v.確保
entail ## v.使成為必要
envisage ## v.預見
enzyme ## n.酵素
epic ## n./adj.史詩(般的)
epigram ## n.雋語
erode ## v.侵蝕
erosion ## n.侵蝕
err ## v.犯錯
escort ## v./n.護衛(者)
essentially ## adv.基本上
esteem ## n./v.尊敬
etemity ## n.永恆
ethic ## n.倫理
ethics ## n.倫理(學)
ethnic ## adj.種族的
etiquette ## n.禮節
evaporate ## v.蒸發
eventual ## adj.結果的
evergreen ## n./adj.常青樹(的)
evoke ## v.喚起
evolution ## n.演化(論)
evolve ## v.使逐漸發展
exceedingly ## adv.極其
excel ## v.擅長
exclaim ## v.驚叫
exclusively ## adv.專門地
executive ## adj.執行的
exempt ## v./adj./n.豁免(的);被免除義務者
exile ## n./v.放逐
exotic ## adj./n.異國風情的
expedition ## n.探險(隊)
expel ## v.趕走
expend ## v.花費
experimentation ## n.實驗
expertise ## n.專業知識
expire ## v.期滿
exploration ## n.研究
exterior ## adj.外部的
extinct ## adj.絕種的
extract ## v.拔出;摘錄
extracurricular ## adj.課外的
extravagance ## n.浪費
eyesight ## n.視力
eyewitness ## n.目擊者
hostile ## adj.敵人的
hostility ## n.敵意
howl ## v.號叫
humbly ## adv.謙虛地
humiliate ## v.屈辱
humiliation ## n.蒙羞
humorously ## adv.幽默地
hurl ## v.用力投擲
hurrah ## interj.歡呼聲
hygiene ## n.衛生
hymn ## n.聖歌
hyphen ## n.連字號
hypocrisy ## n.虛偽
hypocrite ## n.偽君子 *hypothesis n.假設
hysterical ## adj.患歇斯底里症的 G
gaiety ## n.愉快
galaxy ## n.銀河系
garlic ## n.大蒜
gasp ## v.喘息
gauge ## n.標準度量
gear ## n.汽車之排檔
Gemini ## n.雙子座
gender ## n.性別
generalize ## v.歸納
generator ## n.發電機
generously ## ad v.慷慨地
genetics ## n.遺傳學
geographical ## adj.地理學的
geometry ## n.幾何學
germ ## n.起源;細菌
ghetto ## n.城市中猶太人的保留區
gin ## n.杜松子酒
glamour ## n.魅力
glare ## v.發強烈的光
glassware ## n.玻璃器皿
gleam ## n.一絲光線
glitter ## v.閃爍
gloomy ## adj.黑暗的
goalkeeper ## n.守門員
goldfish ## n.金魚
goodbye ## interj./n.再見
goodness ## n.善良
goods ## n.貨物
gorgeous ## adj.華麗的
gospel ## n.主義
grapefruit ## n.葡萄柚
grate ## n./v.壁爐;磨碎
grill ## v.烤
grim ## adj.嚴厲的
groan ## n./v.呻吟
groom ## n.馬夫
grove ## n.樹叢
grumble ## v.發怨言
guideline ## n.指導方針
gypsy ## n.吉普賽
hail ## v.歡迎
hairdo ## n.髮型
hairstyle ## n.髮型
halftvay ## adj./adv.位於兩地中途的
halt ## v.猶豫
handful ## n.一把
happening ## n.事件
happily ## ad v.快樂的
harassment ## n.煩惱
hardy ## adj.強壯的
hare ## n.野兔
harness ## n.馬具
harshly ## adv.刺耳地;嚴厲地
hasten ## v.急忙
haul ## v.拖
hay ## n.乾草
headache ## n.頭痛
heading ## n.標題
head-on ## adj./adv.正的
heap ## n.堆
hearsay ## n.謠言
heavier ## adj.重的
heavyweight ## n./adj.重量級拳手;重的
hedge ## n.樹籬
heighten ## v.增高
heir ## n.繼承人
heiress ## n.女繼承人
helicopter ## n.直昇機
helmet ## n.頭盔;安全帽
herald ## n./v.使者;宣布 v.之將臨
herd ## n.獸群
heroin ## n.海洛英
heroine ## n.女英雄
hesitantly ## adv.遲疑地
heterosexual ## adj.異性戀的
hierarchy ## n.階級組織
hijack ## v.劫取
hike ## n.健行
hinder ## v.妨礙
hockey ## n.曲棍球
Hollywood ## n.好萊塢
homely ## adj 家常的
hometown ## n.永久居留地
homosexual ## adj./n.同性戀
hormone ## n.荷爾蒙
horrifying ## adj.駭人的
hose ## n.長統襪及短襪
hospitable ## adj.好客的
hostage ## n.人質
hostile ## adj.敵人的
hostility ## n.敵意
howl ## v.號叫
humbly ## adv.謙虛地
humiliate ## v.屈辱
humiliation ## n.蒙羞
humorously ## adv.幽默地
hurl ## v.用力投擲
hurrah ## interj.歡呼聲
hygiene ## n.衛生
hymn ## n.聖歌
hyphen ## n.連字號
hypocrisy ## n.虛偽
hypocrite ## n.偽君子
hypothesis ## n.假設
hysterical ## adj.患歇斯底里症的
ideological ## adj.意識形態的
ideology ## n.意識形態
idle ## adj.不做事的
idol ## n.偶像
illegal ## adj.違法的
illogical ## adj.不合理的
illuminate ## v.照亮
immense ## adj.極大的
imminent ## adj.逼近的
immoral ## adj.不朽的
immune ## adj.免除的
impair ## v.損害
impartial ## adj.公平的
impatient ## adj.不耐煩的
imperial ## adj.帝國的
impersonal ## adj.不受個人感情影響的
implement ## v.實現
implicit ## adj.暗示的
impolite ## adj 不禮貌的
imposing ## adj.氣勢雄偉的
impractical ## adj.不切實際的
imprison ## v.監禁
inability ## n.無能力
inappropriate ## adj.不適當的
incentive ## n./adj.刺激
incidentally ## adv.附帶的
inclination ## n.傾斜
incomplete ## adj.不完全的
inconvenient ## adj.使人不便的
incredible ## adj.驚奇的
incur ## v.招致
indebted ## adj. 負債的
indecision ## n.無決斷力
independently ## adv.獨立的
indicator ## n.指示者
indifference ## n.不關心
indifferent ## adj.對...不感興趣
indigestion ## n.消化困難
indignant ## adj.憤慨的
indignation ## n.憤慨
indirect ## adj.非直接的
indistinct ## adj.模糊的
indulge ## v.使滿足
industrious ## adj.勤勉的
ineffective ## adj.無效力的
inefficient ## adj.無效率的
inevitable ## adj.無可避免的
inexpensive ## adj.不貴的
infantry ## n.步兵
infer ## v.推斷
inference ## n.推論
infinite ## adj.無窮的
inflict ## v.予以(打擊等)
influenza ## n.流行性感冒
ingenuity ## n.靈巧
initially ## adv.在起初
initiate ## v.開始;使入會
inject ## v.注射
injustice ## n.不公正
inquisitive ## adj.好管閒事的
insane ## adj.瘋狂的
insecure ## adj.不安全的
inspiring ## adj.令人鼓舞的
instability ## n.不穩定
installation ## n.安置
instantly ## adv.立即
institutional ## adj.制度(上)的
insulting ## adj.侮辱人的
insurance ## n.保險
intact ## adj.未觸動的
integral ## adj.構成整體所需要的
integrity ## n.廉正
intellect ## n.理解力
intelligible ## adj.易了解的
intent ## n.目的
intercept ## v.中途阻止
interchangeable ## adj.可交換的
intercourse ## n.交際
interpreter ## n.口譯者
intimidate ## v.脅迫
intonation ## n.語調
intricate ## adj.複雜的
intrigue ## v./n.密謀;陰謀
intriguing ## adj. 有趣的;有魅力的
intuition ## n.直覺
inventor ## n.發明者
investigator ## n.調查者
investor ## n.投資者
invisible ## adj.看不見的
inviting ## adj.吸引人的
invoke ## v.祈求幫助或保護
inward ## adj.在內的
ironic ## adj.諷剌的
irony ## n.反語
irregular ## adj.不合常規的
irrelevant ## adj.不切題的
irresponsible ## adj.不須負責任的
irritable ## adj.急躁的
irritate ## v.激怒
isolated ## adj.孤立的
Italian ## n.義大利文
itch ## v.發癢
Japanese ## n.日本人
jar ## n.刺耳的聲音
jasmine ## n.茉莉
jaywalk ## v.不遵守交通規則而穿越馬路
jerk ## v.猛然一推
jog ## v.輕撞
journalism ## n.新聞業
journalist ## n.新聞記者
joyous ## adj.快樂的
judicial ## adj.法庭的
junction ## n.連接
justification ## n.理由
justly ## adv.合理的
juvenile ## adj.少年的 K
kangaroo ## n.袋鼠
keenly ## adv 激烈地
kidnap ## v.綁架
kidney ## n.腎
killer ## n.殺人者
kindly ## adj.友善的
kindness ## n.親切
king-size ## adj.特大號的
kit ## n.所有的裝備
know-how ## n.技能
knowledgeable ## adj.博識的 L
lab ## n.實驗室
lad ## n.少年
lama ## n.喇嘛
lament ## v.悲傷
landing ## n.登陸
landlady ## n.女房束
landlord ## n.地主
landmine ## n.地雷
landslide ## n.山崩
laser ## n.雷射
latitude ## n.緯度
lawmaker ## n.立法者
lawnmower ## n.除草機
lawsuit ## n.訴訟
layman ## n.門外漢
leak ## v.漏
leakage ## n.洩漏
lease ## n.租約
legacy ## n.遺產
legally ## adv.法律上
lengthy ## adj.冗長的
lesbian ## n.女同性戀者
lesser ## adj./adv.較小的
liability ## n.有義務
liberate ## v.解放
liberation ## n.解放
lieutenant ## n.陸軍中尉
lifelong ## adj.終生的
lightweight ## n./adj.平均重量以下;不重要的人
likelihood ## n.可能性
likewise ## adv.同樣的
liking ## n 愛好
limp ## v.跛行
linger ## v.逗留
lingering ## adj.持久的
linguist ## n.精通數種外國語言者
linguistics ## n.語言學
liquidation ## n.清償
literacy ## n.識字;讀寫能力
literate ## adj.文雅的
litter ## n.雜物;垃圾
livelihood ## n.生計
lively ## adj.有生氣的
livestock ## n.家畜
lizard ## n.蜥蜴
locomotive ## adj.移動的
loft ## n.閣樓
logo ## n.(=logotype)標識;商標
lonesome ## adj.寂寞的
longevity ## n.長壽
loom ## v.隱約的或威脅性的出現
loop ## n.環形花狀
loosely ## adv.不嚴格地;寬鬆地
lorry ## n.載貨卡車
lottery ## n.獎券;彩票
lotus ## n.蓮;忘憂樹
lounge ## n./v.休息室;懶洋洋地坐或站
lovable ## adj.可愛的
lubricant ## n.潤滑劑
lucrative ## adj.可獲利的;賺錢的
luminous ## adj.明亮的;清楚的
luncheon ## n.午餐;午宴
lyric ## n.抒情詩
machinegun ## n.機關槍
magnify ## v.擴大;誇大;誇獎
maiden ## n.少女
mainstream ## n.主流
majestic ## adj.莊嚴的
majesty ## n.威嚴;王權
malaria ## n.瘧疾
malicious ## adj.存心不良的
manageable ## adj.能處理的
manhood ## n.成年;男子氣質
manifestation ## n.顯示;發表
manifesto ## n.宣言;聲明
manipulate ## v.操縱
manpower ## n.人力
mansion ## n.大廈;官邸
manuscript ## n.草稿;手稿
marathon ## n.馬拉松賽跑
mare ## n.母馬;母驢
marginal ## adj.空白處的;邊際的
Mars ## n.戰神;火星
marshal ## n.元帥
martial ## adj.軍事的
marvel ## n.令人驚奇或驚喜的事物
masculine ## adj.男性的;陽性的
massacre ## n.大屠殺
massage ## n.按摩
masterpiece ## n.傑作;名著
mastery ## n.控制;熟練
measles ## n.麻疹
mechanics ## n.力學;機械學
medication ## n.藥物治療
medieval ## adj.中古的;中世紀的
meditation ## n.沉思;冥想
meek ## adj.溫順的
melancholy ## n./adj.悲哀;憂鬱
mellow ## adj.香醇的;柔和的;老練的
memo ## n.備忘錄
memorable ## adj.值得紀念的
menace ## n.危險;威脅
mentality ## n.智力;心性
mentally ## adv.智力不足的;心理有缺陷的
mentor ## n.導師
metaphor ## n.
metaphysical ## adj.玄學的;形而上學的
mighty ## adj.強大的;偉大的
migration ## n.遷移
mild ## adj.溫和的;順口的
mileage ## n.哩數
militant ## adj.好戰的
milligram ## n.毫克
mingle ## v.混合
minimal ## adj.最低程度的
miraculously ## adv.神奇地
misbehave ## v.做不正當的事
miscellaneous ## adj.各式各樣的
misconduct ## n.不規矩的行為;不當的處理
mishap ## n.災難
missionary ## n.傳教士
mistress ## n.女主人
moan ## v./n.呻吟(聲)
mob ## n.烏合之眾;無秩序的民眾
mock ## v.愚弄;嘲弄
modernization ## n.現代化
modernize ## v.使現代化
molecule ## n.分子
momentary ## adj.短暫的
momentum ## n.動量;動向
monetary ## adj.貨幣的
monitor ## n.級長
monopoly ## n.壟斷;專利
monotony ## n.單調
monstrous ## adj.怪物的;恐怖的
morale ## n.士氣
mortal ## adj.必死的
mortar ## n.灰泥
motherhood ## n.母性
motif ## n.主旨
motivation ## n.動機
motto ## n.箴言;座右銘
mourn ## v.悲悼
multiple ## adj.多重的
muscular ## adj.肌肉的
muse ## n.繆思女神;詩興
mustache ## n.鬚
mustard ## n.芥末
mute ## adj.沉默的
mutton ## n.羊肉
mythology ## n.神話學
nag ## v.不斷地挑剔
naive ## adj. 天真的;樸素的
narrate ## v.敘述
narrative ## n.故事
naturally ## adv.自然地
needy ## adj.非常貧窮的
negligible ## adj.不重要的
negotiable ## adj.可協商的
newcomer ## n.新來者
newlywed ## n.新婚的人
newscaster ## n.新聞播報員
nickel ## n.鎳
nightingale ## n.夜鶯
nitrogen ## n.氮
nobility ## n.高貴;高尚
nominal ## adj.名義上的;不重要或無價值的
nominate ## v.提名某人;指派
nomination ## n.提名;任命
nominee ## n.被提名人
nonetheless ## adv./conj.但是;仍然
noodle ## n.笨人;傻瓜
notable ## adj.顯著的
notably ## adv.顯著地;尤其
noteworthy ## adj.值得注意的
noticeable ## adj.顯明的
notify ## v.通知
novelty ## n.新鮮;新奇
nucleus ## n.中心;核心
nude ## adj.裸體的
nuisance ## n.討厭的事物、人、行為等
numerical ## adj.數字的;表示數量
nurture ## n.養育;教養
nutrition ## n.營養;營養學
oasis ## n.綠洲
oath ## n.誓約;詛咒
obituary ## n.訃聞
oblong ## n./adj.長方形;長方形的
obscure ## adj./n.使暗;使不明顯;暗的;不明顯的
observant ## adj.善於觀察的
observatory ## n.天文臺;氣象臺
obsession ## n.成見;頑念
obviously ## adv.明顯地
odds ## n.可能的機會
offspring ## n.後代;後裔
ointment ## n.藥膏
omen ## n.微兆;預兆
ominous ## adj.惡兆的;不祥的
onset ## n.進攻;有力的開始
operational ## adj.操作的;管理的
opponent ## n.對手
oppress ## v.壓迫;壓制
optical ## adj.視覺的
optimism ## n.樂觀;樂天
optimistic ## adj.樂觀的;有信心的
option ## n.選擇權;選擇力
optional ## adj.可選擇的;隨意的
ordering ## n.安排;佈置
ordinance ## n.法令;條例
ordinarily ## adj.正常地;普通地
orient ## v.使朝向東方
oriental ## n./adj.東方人;東方的
originality ## n.創新;創造力
ornament ## n.裝飾
orphanage ## n.孤兒院
orthodox ## adj.正統的;傳統的
oust ## v.驅逐
outbreak ## v.爆發;發生
outfit ## n.裝備;用具
outing ## n.遠足
outlaw ## n.罪犯
outlet ## n.出口;出路
outnumber ## v.比·多
out-of-date ## adj.過時的
outrage ## n.暴行
outrageous ## adj.駭人的;暴虐的
outset ## n.開始
outskirts ## n.邊界;市郊
outward ## adj.外面的;肉體的
overdo ## v.做太多或過份
overhear ## v.偷聽;無意中聽到
overlap ## v.部分重疊;部分相同
overturn ## v.使傾覆;推翻
oxidation ## n.氧化(作用)
oyster ## n.牡蠣
pact ## n.協定;公約
painfully ## ad v.痛苦地
panacea ## n.萬靈藥
pane ## n.窗玻璃片
panorama ## n.全景
parachute ## n.降落傘
paradoxically ## adv.似是而非地
paragon ## n.模範
paralyze ## v.使麻痺;使癱瘓
paramount ## adj./n.至上的;最高統治者
parking ## n.停車
parlor ## n.起居室;會客室
partially ## adv.部分地
participant ## n.參與者;分享者
part-time ## adj./adv.兼任的
passerby ## n.穿過;通過
passionate ## adj.熱情的
paste ## n.麵團
pasture ## n.牧地;草原
pat ## n.拍
pathetic ## adj.悲哀的
patiently ## adv.耐心地
patron ## n.贊助人
pavement ## n.人行道
paw ## n.腳掌;腳爪
pawn ## v.典當
pawnshop ## n.當鋪
payday ## n.發薪日
peasant ## n.佃農
pedal ## n.踏板
pedestrian ## n.行人
peer ## n.同輩
penetrate ## v.進入;看穿
penetrating ## adj.敏銳的
penicillin ## n.盤尼西林
penis ## n.男生殖器
pension ## n.養老金
pentagon ## n.五角形
perch ## n.棲木;高而安全的地位
performer ## n.執行者;表演者
peril ## n.危險
periodic ## adj.定期的
periodical ## n.期刊
perish ## v.毀滅;死亡
perpetual ## adj.永久的
perplex ## v.使困惑
perseverance ## n.不屈不撓
pertain ## v.有關
pessimism ## n.悲觀(主義)
pesticide ## n.殺蟲劑
petition ## n.請願(書)
petroleum ## n.石油
petty ## adj.不重要的
pharmacy ## n.藥房
philharmonic ## adj.愛樂(團體)的
photographic ## adj.攝影(用)的
physiological ## adj.生理學的
picket ## n.糾察隊員
pick-up ## n.擴音器
picturesque ## adj.似畫的
piety ## n.虔誠
pigment ## n.顏料
pilgrimage ## n.朝聖者的旅程
pillar ## n.柱子
pimple ## n.粉刺;面皰
pint ## n.品脫(液量名)
pious ## adj.虔誠的
pipeline ## n.管線
pirate ## n.海盜
piston ## n.活塞
pitcher ## n.大水罐;投手
plague ## n./v.瘟疫;折磨
plainly ## adv.清楚地
planetary ## adj.行星的
planning ## n.計畫
plantation ## n.種植園
plaster ## n.灰泥
Plato ## n.柏拉圖(古希臘哲學家)
playmate ## n.玩伴
playwright ## n.劇作家
plea ## n.懇求
pledge ## v.發誓;保證
plow ## v.耕(地)
plug ## n.塞子
pneumonia ## n.肺炎
Polish ## adj.波蘭的;波蘭人(語)的
poll ## n.民意調查
pollutant ## n.污染物
polynomial ## n.多詞學名;多項式
ponder ## v.深思
populate ## v.移居於
portfolio ## n.文件夾;投資組合
postman ## n.郵差
posture ## n.姿勢
post-war ## adj.戰後的
potent ## adj.有效力的
potentiality ## n.潛在性
potter ## n./v.陶藝家;閒逛
poultry ## n.家禽(肉)
practitioner ## n.開業者
praiseworthy ## adj.值得讚揚的
preacher ## n.傳教士
precaution ## n.預防措施
precedent ## n.慣例
predecessor ## n.前輩
predicament ## n.困境
prediction ## n.預言
preface ## n.前言
preferably ## adv.更好地
preference ## n.偏愛
preliminary ## adj./n.初步的;初步行動
premature ## adj.過早的
premier ## n.首相
premise ## n.前提
premium ## n.保險費
preoccupation ## n.全神貫注
preoccupy ## v.使全神貫注
prescribe ## v.開(樂方)
prescription ## n.藥方
presently ## adv.不久
preside ## v.主持
presidency ## n.總統(校長)的職位
presidential ## adj.總統(校長)的
presumption ## n.推測
preventive ## adj.預防的
preview ## n.預習;預演
principally ## adv.主要(地)
privately ## adv.私下地
probe ## v.探查
proceeding ## n.措施
processing ## n.過程
proclamation ## n.公告
productivity ## n.生產力
profess ## v.自稱
proficient ## adj.精通的
profile ## n.側面像;輪廓
progressive ## adj.不斷前進的
prohibition ## n.禁止
projection ## n.凸出物;設計;投影
prone ## adj.易於發生(不愉快事)的;有傾向的
pronoun ## n.代名詞
prophesy ## v.預言
prose ## n.散文
prosecute ## 對...起訴
prosecution ## n.(被)起訴
prosper ## v.興旺
prostitute ## n./v.妓女;出賣(名譽等)
proudly ## adv.驕傲地
provincial ## adj.省的
provoke ## v.激怒
prudent ## adj.小心謹慎的
prune ## v.修剪;刪除
psalm ## n.聖歌
psychiatrist ## n.精神科醫生
psychiatry ## n.精神病學
pulmonary ## adj.肺(病)的
pulse ## n.脈搏
punctuation ## n.標點(法)
purely ## adv.完全地
purity ## n.純潔
pyjamas ## n.睡衣褲
quaint ## adj.奇特的
quarrelsome ## adj.好爭吵的
quest ## n.探索
questionnaire ## n.問卷
queue ## n./v.行列;排隊
rack ## n.置物架
radiate ## v.發射
rag ## n.破布
raid ## n.突擊
raincoat ## n.雨衣
rally ## v./n.集合;開玩笑
rancher ## n.農場主人
ransom ## n.贖金
rape ## v.強姦
ratify ## v.批准
reactionary ## adj.保守的;反動的
readiness ## n.準備就緒;迅速
reassure ## v.使安心
rebellion ## n 造反
rebellious ## adj.難管教的
rebuild ## v.重建
recapture ## v.再體驗
recession ## n.經濟衰退
recipient ## n.接受者
reckless ## adj.輕率的
reckon ## v.推斷
recollect ## v.想起
reconcile ## v.調解
reconstruction ## n.重建(物)
recruit ## v.招募
redundant ## adj.過剩的
reel ## n./v.捲軸;捲;蹣跚
referendum ## n.公民投票
refine ## v.提煉
refinement ## n.精製品
refrain ## v.抑制
refund ## n.退款
regiment ## n.(軍)團
rehabilitate ## v.使恢復
rehabilitation ## n.康復
reign ## n.君主統治時期
rein ## n.韁繩;統治
rejoice ## v.高興
relatively ## adv.相對地
relinquish ## v.放棄
relish ## n./v.美味;喜愛
reluctantly ## adv.不願意地
remains ## n.遺跡
reminiscence ## n.回憶
reminiscent ## adj.使人憶起...的
renaissance ## n.復興
renowned ## adj.著名的
reorganization ## 改組
repay ## v.償還
repel ## v.擊退
repent ## v.後悔
replaceable ## adj.可取代的
repress ## v.抑制
republican ## adj./n.共和國的;共和主義者
resemblance ## n.相似
resent ## v.不滿
reservoir ## n.蓄水池
reside ## v.居住
resonance ## n.共嗚
resort ## n.度假地
restoration ## n.恢復
restraint ## n.克制
resultant ## adj.做為...後果的
resume ## v.重新開始
retail ## n./adj./adv.零售;零售的(地)
retaliate ## v.報復
retort ## v./n.反駁
retrieve ## v.找回
revive ## v.復活
revolve ## v.使旋轉
rhetoric ## n.修辭學
rhythmic ## adj.韻律的
rib ## n.肋骨
righteous ## adj.正直的
rigorous ## adj.嚴密的
riot ## n.暴動
rite ## n.儀式
ritual ## n.(儀式的)活動
rival ## n.對手
roach ## n.蟑鄉;大麻煙卷的煙蒂
robin ## n.知更鳥
rotate ## 使旋轉
rotation ## n.旋轉
royalty ## n.皇室成員
rugged ## adj 崎嶇的
saddle ## n.馬鞍
saloon ## n.大轎車;酒館;交誼廳
salute ## v.行舉手禮
salvage ## n./v.搶救
salvation ## n.救星
sanction ## n.批准
sandal ## n.涼鞋
sanitation ## n.衛生設備
sarcastic ## adj.諷刺的
Satan ## n.魔鬼;撒旦
satire ## n.諷刺文學
satisfactorily ## ad 二令人滿意地
savage ## adj.兇猛的
scan ## v.細看;掃描
scandal ## n.醜聞
scarlet ## adj.鮮紅色的
scholastic ## adj.學校的
scorn ## n./v.輕蔑;鄙視
scrap ## n.碎片
scrape ## v.把...括除
scratch ## v.抓(傷)
script ## n.原稿
scrutiny ## n.細查
sculpture ## n.雕塑(品)
seam ## n.接縫
secular ## adj.世俗的
secure ## adj.安全的
seduce ## v.慫恿;引誘
seemingly ## adv.看樣子
segregate ## v.隔離開
seminar ## n.研討會
sensation ## n.感覺
sensibility ## n.判斷力
sentimental ## adj.感情上的
separately ## adv.個別地
separation ## n.分開
sequential ## adj.隨之而來的
sermon ## n.說教;佈道
serum ## n.血清
settler ## n.移民
sever ## v.割斷
severely ## adv.嚴重地
sewer ## n.下水道
shaft ## n.把手
shear ## n.剪;切斷
shed ## v.使流出
sheer ## adj.純粹的
shepherd ## n./v.牧羊人;引導
shift ## n.變換
shipment ## n.一批貨物
shiver ## v.顫抖
shortage ## n.短缺
shortcoming ## n.缺點
shorten ## v.使縮短
shortsighted ## adj.近視的
sibling ## n.手足
silently ## adv.寂靜地
similarly ## adv.同樣地
simplicity ## n.樸素
simplify ## v.使單純
simultaneously ## adv.同時
sinister ## adj.陰險的
sitter ## n.模特兒
situate ## v.使位於
situated ## adj.坐落在...的
sizable ## adj.相當大的
skeleton ## n.骨骸
slam ## v.使勁關閉
slap ## n.一巴掌
slash ## v.亂砍
sloppy ## adj.馬虎的
slug ## n.子彈;蛞蝓
slum ## n.貧民窟
smallpox ## n.天花
smuggle ## v.走私
snatch ## v.搶
sneak ## v.鬼鬼祟祟地走
sneaker ## n.鬼鬼祟祟做事的人
soak ## v.浸泡
sob ## v.啜泣
sober ## adj.清醒的
socialism ## n.社會主義
socially ## adj.善於交際地
sociological ## adj.社會學的
sociology ## n.社會學
sodium ## n.鈉
solar ## adj.太陽的
sole ## n.腳底(板);鞋底
solely ## adj.唯一地
solicitor ## n.懇求者;事務律師
solidarity ## n.團結
solitary ## adj.獨居的
solitude ## n.孤獨
solo ## n./adj.獨唱;單獨的
souvenir ## n.紀念品
sovereign ## n.元首
sovereignty ## n.主權
sow ## v.播(種)
spectacles ## n.眼鏡
spectacular ## adj.壯觀的
spectra ## n.光譜
speculate ## v.推測;投機
sperm ## n.精子
spinach ## n.菠菜
sponsor ## v./n 贊助(者)
spontaneous ## adj.自發的
spouse ## n.配偶
sprawl ## v.伸開四肢躺(坐)
spray ## v.噴;濺散
spur ## n.馬刺;激勵
squad ## n.爭吵
squarely ## adv.正直地
stability ## n.穩定性
stack ## v.使成堆
stadium ## n.(露天)運動場
stagger ## v.蹣跚
stall ## n.攤位
standardize ## v.使標準化
standpoint ## n.立場
staple ## n./adj.釘書針;主要的
startle ## v.使大吃一驚
statesman ## n.政治家
static ## adj.靜態的
stationary ## adj.靜止的
stationery ## n.文具
statistical ## adj.統計(學)的
stature ## n.高水平;身材
statute ## n.法令
steer ## v.駕駛
stepchild ## n.妻與前夫(或夫與前妻)所生的孩子
stereotype ## n.老套
steward ## n.服務員
stimulation ## n.刺激
stimulus ## n.刺激(物)
stoop ## v.彎腰
storage ## n.儲存
straighten ## v.清理
strain ## v.扭傷
strategic ## adj.戰略(性)的
streak ## n./v.條紋;快速移動
streetcar ## n.(市內)有軌電車
stride ## v.邁大步走
structural ## adj.結構上的
sturdy ## adj.強健的
subdue ## v.使屈服
subjective ## adj.主觀的
submit ## v.提交
subscribe ## v.訂購
subsequently ## ad v.後來
subsidy ## n.補貼
substantially ## adv.充足地
successive ## adj.連續的
suckle ## v.哺乳
suffering ## n.苦難
suffocate ## v.(使)窒息而死
sugarcane ## n.甘蔗
suitcase ## n.手提箱
summon ## v.召喚
sunlight ## n.陽光
sunset ## n.日落
sunshine ## n.陽光
superb ## adj.極好的
superficial ## adj.表面(皮)的
superfluous ## adj.過多的
superhighway ## n.超級高速公路
superimpose ## v.使重疊
superintendent ## n.監護人;警長
superiority ## n.優越
supermarket ## n.超級市場
superstition ## n.迷信
superstitious ## adj.迷信的
supervise ## v.監督
supervisor ## n.監督人
supplement ## n.補充
supposedly ## adv.據推測
suppress ## v.鎮壓
surface ## n./adi./v. 表面(的);顯露
surge ## v.洶湧向前
surname ## n.姓
surrender ## v.投降
survivor ## n.生還者
suspension ## n.中止
sway ## v.(使)搖動
swift ## adj.迅速的
syllabus ## n.教學大綱
symmetry ## n.對稱(性)
synonym ## n.同義詞
synthesis ## n.綜合(體);合成
systematically ## adv.有系統地
tablespoon ## n.大湯匙
tablet ## n.藥片
tabloid ## n.小報
taboo ## n.禁忌
tackle ## v.處理
tag ## n.標籤
talkative ## adj.健談的
tame ## adj.馴∣服的
tan ## v.(使)曬黑
tangerine ## n 橘子
tangible ## adj.明確的;實質的
tanker ## n.油輪
tariff ## n.關稅
teller ## n.講故事者;銀行出納員
temperament ## n.氣質
tempest ## n.暴風(雨、雪)
tempt ## v.慫恿
temptation ## n.誘惑
tenant ## n.房客
tentative ## adj.試驗性的
terminal ## n.終點;總站
terminate ## v.(使)終止
terrace ## n.陽臺
testify ## v.作證
theatrical ## adj.戲劇的
theft ## n.偷竊
then ## adj./adv.那時
theologian ## n.神學家
theological ## adj.神學(上)的
theoretical ## adj.理論(上)的
therapeutic ## adj.有療效的
therapist ## n.治療專家
thermal ## adj.熱(量)的
thesis ## n.論文
thigh ## n.大腿
threshold ## n.門檻;開端
thrift ## n.節儉
thrill ## v./n.使激動;興奮
thrilling ## adj.令人激動的
thrive ## v.興旺
thunderstorm ## n.雷雨
thyroid ## n.甲狀腺
tightly ## adv.堅固地
token ## n.記號
toll ## n.通行費
toothbrush ## n.牙刷
torture ## v.拷打;折磨
totally ## adj.完全地
touchstone ## n.試金石;(檢驗)標準
tournament ## n.錦標賽
tow ## v./n.拖
toxic ## adj.有毒的
tractor ## n.拖拉機
tranquil ## adj.寧靜的
tranquilizer ## n.鎮靜劑
transcend ## v.超越
transformation ## n.轉變
transit ## n.運輸
transition ## n.過渡(期)
transmission ## n.傳播
transmit ## v.傳播
transplant ## v./n.移植
transport ## n.運輸(系統)
trauma ## n.精神創傷;外傷
traverse ## v.橫越
trespass ## v.擅入
tribune ## n.護民官
trigger ## n./v.扳機;引發
trim ## v.修剪
triumphant ## adj.勝利的
trivial ## adj.瑣碎的
trophy ## n.獎品
tsunami ## n.(源自日語)海嘯
tuberculosis ## n.肺結核
tuition ## n.學費
tumble ## v.跌倒
tumor ## n.腫瘤
turmoil ## n.混亂
tumpike ## n.付費高速公路
tutor ## n.家庭教師
twig ## n.細枝
tyrant ## n.暴君
ulcer ## n.潰瘍
ultimately ## adv.最後
ultraviolet ## adj.紫外(線)的
unanimously ## adv.全體一致地
unaware ## adj.沒有察覺到的
uncomfortable ## adj.不舒服的
unconsciously ## adv.無意識地
underdeveloped ## adj.低度開發的
underestimate ## v.低估
undergo ## v.接受;經歷
undergraduate ## n.大學肄業生
underground ## adj.地(面)下的;祕密的
underline ## 在...之下劃線
understandable ## adj.可理解的
undertake ## v.承擔
underwrite ## v.為...保險
undesirable ## adj.令人不快的
undue ## adj.過份的
unemployed ## adj.失業的
unemployment ## n.失業人數
unexpectedly ## adj.未料到地
unfair ## adj.不公平的
unforgettable ## adj.難忘的
unfortunate ## adj.不幸的
ungrateful ## adj.忘恩負義的
unify ## v.統一
unlimited ## adj.無限的
unload ## v.從...卸下(貨物)
unlock ## v.開啟
unofficial ## adj.非正式的
unpleasant ## adj.使人不愉快的
unprecedented ## adj.前所未有的
unpredictable ## adj.不可預測的
unrest ## n.動亂
untouched ## adj.未觸動過的
unusually ## adv.非常
upbringing ## n.養育
upend ## v.把...倒置
upgrade ## v.提升
uplift ## v.抬起
uproot ## v.根除
uranium ## n.鈾
urgency ## n.緊急
usefulness ## n.有效
usher ## n.迎賓員
utensil ## n.器皿
utmost ## adj.極度的
Utopia ## prop./n.烏托邦
utterly ## adj.完全地V
vacancy ## n.空位
vaccine ## n.疫苗
vacuum ## n.真空;空虛(感)
vaguely ## adv.模糊地
validity ## n.有效力
vanilla ## n.香草
vanity ## n.自負
vapor ## n.水蒸氣
variable ## adj.易變的
variation ## n.變化
veil ## n.面紗
vent ## n.通風孔
venture ## n.冒險(行為);投機
Venus ## n.維納斯女神;金星
verbal ## adj.口頭的
verdict ## n.判決
verify ## v.證實
versatile ## adj.多才多藝的
vertical ## adj.垂直的
vet ## n./v.獸醫;審查
vex ## v.使惱怒
via ## prep.取道
viable ## adj.切實可行的
vibration ## n.振動
vicious ## adj.惡意的
victimize ## v.使犧牲
vigor/vigour ## n.精力
vigorously ## adv.精力充沛地
villa ## n.別墅
villain ## n.反派角色
vine ## n.葡萄(藤)
vinegar ## n.醋
vineyard ## n.葡萄園
virtually ## adv.幾乎
virtuous ## adj.品德高尚的
visa ## n.簽證
visualize ## v.想像
vocal ## adj.發音的
vocation ## n.職業
vogue ## n.流行
volcano ## n.火山
vomit ## v.嘔吐
vow ## n.誓言
vulgar ## adj.粗俗的
vulnerable ## adj.脆弱的 W
Walkman ## n.隨身聽
walnut ## n.胡桃(樹)
warrant ## n.搜查令
warrior ## n.戰士
warship ## n.軍艦
wax ## n.蠟
wayside ## n.路邊
weaken ## v.削弱
weary ## adj.筋疲力竭的
weed ## n.雜草
whatsoever ## adj.任何的
wheelchair ## n:輪椅
whereabouts ## adv.在哪兒
whereby ## adv.憑藉
whichever ## adj./pron.無論哪個
wholesale ## n./adj.批發;大批的
wholly ## adv.完全地
widower ## n.鰥夫
wilderness ## n.荒野
wildly ## adv.野生地
willingness ## n.自願
withhold ## v.保留
withstand ## v.抵擋
woe ## n.悲傷
wolf ## n.色狼
worship ## v.崇拜
wreckage ## n.殘骸
yacht ## n.帆船;遊艇
Yale ## n.耶魯大學
yearn ## v.渴望
yeast ## n.酵母(菌)
yield ## v.出產
zeal ## n 渴望
zealously ## adv.熱心地
zebra ## n.斑馬
zip ## n.活力
zoology ## n.動物學
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
