
caption ='國中其他常用800字';

//每題有幾個選項
numberOfOptions = 3;

//每列最多可以有幾個選項
numberOfOptionsPerRow = 1;	

//每回合抽幾題題目
numberOfQuestionsPerRound = 50;

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
absent##[形容詞] 缺席的,不在場的; [動詞] 缺席
accept##[動詞] 接受
accident##[名詞] 事故;災禍
active##[形容詞] 活躍的
activity##[名詞] 活動
add##[動詞] 添加
address##[動詞] 寫上收件人姓名地址;向...致詞; [名詞] 地址; 演說
admire##[動詞] 欽佩;欣賞
adult##[形容詞] 成年的;成熟的;色情的; [名詞] 成年人
advertisement##[名詞] 廣告
advice##[名詞] 忠告
advise##[動詞] 勸告
affect##[動詞] 影響；感染；打動
against##[介系詞] 反對
aim##[動詞] 瞄準,對準; [名詞] 目標,目的
air conditioner##[名詞] 冷氣機
airlines##[名詞] 航線, 航空公司
alarm##[動詞] 向...報警;使驚慌不安; [名詞] 警鈴;警報;驚慌
album##[名詞] 相簿;集郵簿;唱片集
alike##[形容詞] 相似的; [副詞] 一樣地,相似地
alive##[形容詞] 活著的;活躍的
alone##[形容詞] 單獨的;孤單的; [副詞] 單獨地;獨自地
aloud##[副詞] 大聲地
alphabet##[名詞] 字母
altogether##[副詞] 完全地;總共
ambulance##[名詞] 救護車
among##[介系詞] 在...之中
amount##[動詞] 合計,共計; [名詞] 總數
ancient##[形容詞] 古代的
angel##[名詞] 天使
anger##[名詞] 生氣
ankle##[名詞] 腳踝
anywhere##[副詞] 任何地方
apologize##[動詞] 道歉
appreciate##[動詞] 感謝;賞識
argue##[動詞] 爭論
armchair##[名詞] 扶手椅子
army##[名詞] 軍隊;大群
arrange##[動詞] 排列;整理
artist##[名詞] 藝術家
asleep##[形容詞] 睡著的
assistant##[形容詞] 助理的;輔助的;有幫助的; [名詞] 助手
assume##[動詞] 假定
attention##[名詞] 注意;專心
available##[形容詞] 可用的,可得到的,有效的
avoid##[動詞] 避免
baby sitter##[名詞] 替人看小孩者
backpack##[動詞] 把...放入背包; 背負簡便行李旅行; [名詞] 背包
backward##[形容詞] 向後的;落後的; [副詞] 向後地;落後地
ball##[動詞] 使成球形; 呈球狀; [名詞] 球
balloon##[動詞] 像氣球般鼓起(或膨脹);乘氣球上升;激增; [名詞] 汽球
barbecue##[動詞] (在戶外)烤,炙(肉類); [名詞] 烤肉
barber##[名詞] 男理髮師
bark##[動詞] 狗叫;咆哮; [名詞] 狗吠聲;樹皮
base##[動詞] 以...為基地; [名詞] 基;底;基部
basement##[名詞] 地下室
basic##[形容詞] 基本的
bathe##[動詞] 洗澡
beard##[名詞] 鬍子
beat##[動詞] 擊敗;敲擊; [名詞] 敲打;敲擊聲;心跳聲;滴答聲;拍子
beauty##[名詞] 美貌;美人
beer##[名詞] 啤酒
beginner##[名詞] 新手
behave##[動詞] 舉動;守規矩
besides##[副詞] 並且; [介系詞] 除...之外
beyond##[副詞] 在更遠處; [介系詞] 越出;在...那一邊
bill##[動詞] 記入帳; [名詞] 帳單; 鈔票
biology##[名詞] 生物學
bitter##[形容詞] 苦的;嚴酷的
blame##[動詞] 歸咎於; [名詞] 責備,指責;責任
bless##[動詞] 祝福;保佑
blood##[名詞] 血
blouse##[名詞] 女裝短上衣
board##[動詞] 上車;上船; [名詞] 木板;膳食;車上;船上; 董事會
bomb##[動詞] 轟炸,投彈;慘敗; [名詞] 炸彈
bone##[名詞] 骨頭
bookcase##[名詞] 書架
bother##[動詞] 煩擾; [名詞] 煩惱,麻煩;使人煩惱的人(或事物)
bowling##[名詞] 保齡球戲
branch##[動詞] 出枝;分支;分岔; [名詞] 樹枝;支部
brick##[名詞] 磚塊
broad##[形容詞] 寬廣的
broadcast##[動詞] 廣播; [名詞] 廣播;廣播節目;散佈;播種
brunch##[名詞] 早午餐
bucket##[名詞] 水桶
buffet##[名詞] 自助餐
bundle##[名詞] 捆;大量
burst##[動詞] 爆開;闖入; [名詞] 爆炸;破裂;缺口
cabbage##[名詞] 包心菜
cable##[動詞] 發越洋電報; [名詞] 纜索;有線電視
cafeteria##[名詞] 自助餐館
cage##[動詞] 把...關進籠子;把...囚禁起來; [名詞] 鳥籠;獸籠
calendar##[名詞] 日曆;月曆;行事曆
calm##[形容詞] 寧靜的; [動詞] 變安靜;使鎮定; [名詞] 安靜;鎮定;平靜;無風
campus##[名詞] 校園
cancel##[動詞] 取消
cancer##[名詞] 癌症
captain##[名詞] 隊長;機長;艦長
careless##[形容詞] 粗心的
carpet##[動詞] 在...上鋪地毯;斥責; [名詞] 地毯
carrot##[名詞] 胡蘿蔔
cartoon##[動詞] 畫漫畫;畫草圖; [名詞] 卡通
cash##[動詞] 兌現; [名詞] 現款
cause##[動詞] 導致,使發生,引起; [名詞] 原因;理由
ceiling##[名詞] 天花板
central##[形容詞] 中央的
century##[名詞] 一世紀
cereal##[名詞] 麥片
certain##[形容詞] 肯定的; [代名詞] 某幾個;某些
channel##[動詞] 在...開水道;傳送; [名詞] 管道;頻道
character##[名詞] 特性;角色;(中文)字
charge##[動詞] 索價;充電; [名詞] 費用;充電
chart##[動詞] 繪製...的圖表;詳細計劃; [名詞] 圖表
chase##[動詞] 追; [名詞] 追逐;追擊
chemistry##[名詞] 化學
chess##[名詞] 西洋棋
childhood##[名詞] 幼時
childish##[形容詞] 幼稚的
childlike##[形容詞] 天真爛漫的
chin##[名詞] 下巴
chubby##[形容詞] 圓胖的
classical##[形容詞] 古典的
clever##[形容詞] 聰明伶俐的
climate##[名詞] 氣候
closet##[名詞] 壁櫥;衣櫥
coach##[動詞] 訓練,指導,輔導;乘馬車旅行; [名詞] 教練
coast##[名詞] 海岸
cockroach##[名詞] 蟑螂
coin##[動詞] 鑄造(貨幣);創造,杜撰(新詞等); [名詞] 硬幣
cola##[名詞] 可樂
college##[名詞] 學院;大學
colorful##[形容詞] 富有色彩的
command##[動詞] 命令;掌握; 指揮;控制; [名詞] 命令
comment##[動詞] 評論; [名詞] 評論
company##[名詞] 公司
compare##[動詞] 比較
complain##[動詞] 抱怨
complete##[形容詞] 完整的；徹底的; [動詞] 完成
concern##[動詞] 使擔心; [名詞] 關懷
confident##[形容詞] 有信心的
confuse##[動詞] 使迷惑
congratulation##[名詞] 祝賀
consider##[動詞] 考慮
considerate##[形容詞] 體諒的
contact lens##[名詞] 隱形眼鏡
continue##[動詞] 繼續
contract##[動詞] 締結;訂契約;承包;收縮; [名詞] 契約；合同
control##[動詞] 控制; [名詞] 支配;控制;操縱裝置;指揮部
convenience store##[名詞] 便利商店
conversation##[名詞] 會話
corn##[名詞] 玉米
cotton##[名詞] 棉花
cough##[動詞] 咳嗽; [名詞] 咳嗽
couple##[動詞] 連接;結合;成婚;交配; [名詞] 一對
courage##[名詞] 勇氣
court##[動詞] 向...獻殷勤;追求;引誘;求婚; [名詞] 法庭；(網球等的)場地
cowboy##[名詞] 牛仔
crab##[名詞] 螃蟹
crayon##[名詞] 蠟筆
cream##[形容詞] 奶油色的,淡黃色的,乳黃色的; [名詞] 奶油
create##[動詞] 創造
credit card##[名詞] 信用卡
crime##[名詞] 犯罪
crowd##[動詞] 擠滿;聚集; [名詞] 群眾
crowded##[形容詞] 擁擠的
cruel##[形容詞] 殘酷的
culture##[名詞] 文化
cure##[動詞] 治癒; [名詞] 痊癒
curious##[形容詞] 好奇的
current##[形容詞] 現行的；當前的; [名詞] 水流;電流
curtain##[動詞] (用簾子)遮掉,隔開; [名詞] 窗簾;(舞臺上的)幕
curve##[動詞] 使彎曲;使成曲線; [名詞] 曲線
custom##[名詞] 習俗
customer##[名詞] 顧客
daily##[形容詞] 每日的; [副詞] 每日; [名詞] 日報
damage##[動詞] 損害; [名詞] 損害
danger##[名詞] 危險
dawn##[動詞] 破曉, 頓悟; [名詞] 黎明
deaf##[形容詞] 聾的
debate##[動詞] 辯論; [名詞] 辯論
decision##[名詞] 決定
decorate##[動詞] 佈置
decrease##[動詞] 減少; [名詞] 減少,減小;減少額,減小量
deer##[名詞] 鹿
degree##[名詞] 程度
deliver##[動詞] 遞送;發表,講;給……接生
department##[名詞] 部門
depend##[動詞] 依賴
describe##[動詞] 描述
desert##[動詞] 遺棄;離棄;逃跑; [名詞] 沙漠
design##[動詞] 設計; [名詞] 圖案;設計
desire##[動詞] 渴望;想要; [名詞] 渴望
dessert##[名詞] 餐後甜點
detect##[動詞] 查出
develop##[動詞] 發展
dial##[動詞] 撥(電話號碼); [名詞] 刻度盤;調節器;撥號盤
diamond##[名詞] 鑽石
diary##[名詞] 日記
diet##[形容詞] 節食的; [動詞] 節食; [名詞] 飲食;特種飲食
difference##[名詞] 差別
difficulty##[名詞] 困難
diligent##[形容詞] 勤勉的
dinosaur##[名詞] 恐龍
diplomat##[名詞] 外交官
direct##[形容詞] 直接的; [動詞] 指引; [副詞] 筆直地;直接地;直達地
direction##[名詞] 方向; 指示
disappear##[動詞] 消失
discover##[動詞] 發現
discuss##[動詞] 討論
discussion##[名詞] 討論
dishonest##[形容詞] 不誠實的
distance##[動詞] 使疏遠; [名詞] 距離
distant##[形容詞] 遠離的
divide##[動詞] 分開;除以; [名詞] 分歧,不和;分水嶺
dizzy##[形容詞] 暈眩的
dodge ball##[名詞] 躲避球遊戲
dolphin##[名詞] 海豚
donkey##[名詞] 驢子
double##[形容詞] 雙重的; [動詞] 加倍; [名詞] 兩倍
doubt##[動詞] 懷疑; [名詞] 懷疑
doughnut##[名詞] 油炸圈餅
downstairs##[形容詞] 樓下的; [副詞] 樓下地; [名詞] 樓下
downtown##[形容詞] 城市商業區的; [副詞] 往城市商業區; [名詞] 城市商業區
dragon##[名詞] 龍
drama##[名詞] 戲劇
dresser##[名詞] 衣櫃
drugstore##[名詞] (常兼售雜貨的)藥房
dryer##[名詞] 烘衣機
dumb##[形容詞] 愚笨的;啞的
dumpling##[名詞] 餃子
duty##[名詞] 義務;關稅
eagle##[名詞] 老鷹
earn##[動詞] 賺到
earrings##[名詞] 耳環
ease##[動詞] 減輕; [名詞] 容易;不費力;舒適;悠閒,放鬆,緩和
edge##[動詞] 使鋒利;使漸進; [名詞] 邊緣;優勢
education##[名詞] 教育
effort##[名詞] 努力;氣力；精力
elder##[形容詞] 年紀較長的; [名詞] 長輩
elect##[形容詞] 選定的,當選的; [動詞] 選出
electric##[形容詞] 電的
embarrass##[動詞] 使困窘
emotion##[名詞] 情緒
emphasize##[動詞] 強調
employ##[動詞] 僱用
empty##[形容詞] 空的; [動詞] 倒空;流空
enemy##[名詞] 敵人
energetic##[形容詞] 精力充沛的
energy##[名詞] 精力;能量
engine##[名詞] 引擎
entrance##[名詞] 入口
environment##[名詞] 環境
envy##[動詞] 羨慕;嫉妒; [名詞] 妒忌;羨慕
equal##[形容詞] 相等的; 平等的; [動詞] 等於; [名詞] 相等的事物;相等的數量
especially##[副詞] 特別地
event##[名詞] 事件
everywhere##[副詞] 處處
evil##[形容詞] 邪惡的; [名詞] 邪惡,罪惡
exam##[名詞] 考試
excite##[動詞] 使興奮;使激動
exist##[動詞] 存在
exit##[動詞] 出去,離去;退去; [名詞] 出口
express##[形容詞] 快遞的,快運的;明確的; [動詞] 陳述；表達；;快遞郵寄; [副詞] 用快遞;由直達快車;特意地; [名詞] 快車;快遞服務;快運
extra##[形容詞] 額外的; [副詞] 額外地;另外;特別地,非常地; [名詞] 附加的人物或錢;號外
fair##[形容詞] 公平的;美好的; [副詞] 公平地,公正地;正面地; [名詞] 商品展覽會
FALSE##[形容詞] 假的
fancy##[形容詞] 花俏的;特級的; [動詞] 想像;猜想;愛慕(異性); [名詞] 愛好;迷戀;想像;怪念頭
fantastic##[形容詞] 奇妙的
fashionable##[形容詞] 時尚的
faucet##[名詞] 水龍頭
fault##[動詞] 挑...的毛病;產生斷層; [名詞] 過錯
fear##[動詞] 畏懼; [名詞] 懼怕
fee##[名詞] 費用
female##[形容詞] 女性的; [名詞] 雌性動物
fence##[動詞] 用柵(或籬)圍起來;防護;保衛; [名詞] 柵欄;籬笆
film##[動詞] 把...拍成電影;生薄膜; [名詞] 膠捲;影片
final##[形容詞] 最終的; [名詞] 決賽;期末考;(當日報紙的)末版
fit##[形容詞] 適合的;恰當的;相稱的;能勝任的; [動詞] 合身;適合; [名詞] 適合;合身
flag##[動詞] 打旗號表示; [名詞] 旗子
flashlight##[名詞] 手電筒
flat tire##[名詞] 爆胎
flight##[名詞] 飛行
flour##[動詞] 撒粉於;把...磨成粉; [名詞] 麵粉
flu##[名詞] 流行性感冒
flute##[動詞] 用長笛奏(樂曲); [名詞] 橫笛
focus##[動詞] 集中; [名詞] 焦點
fog##[動詞] 以霧籠罩;使困惑;使模糊; [名詞] 霧
foggy##[形容詞] 有霧的
foolish##[形容詞] 愚蠢的
football##[名詞] 美式足球
forest##[名詞] 森林
forgive##[動詞] 原諒
form##[動詞] 形成; [名詞] 形態;表格
formal##[形容詞] 正式的
former##[形容詞] 前者
forward##[形容詞] 前面的; [動詞] 轉遞; [副詞] 向前地; [名詞] 前鋒
frank##[形容詞] 坦白的
freedom##[名詞] 自由
freezer##[名詞] 冰箱的冷凍部;冷凍箱
freezing##[形容詞] 冰凍的;極冷的; [名詞] 凍結狀態
friendship##[名詞] 友誼
frighten##[動詞] 害怕;吃驚
frisbee##[名詞] (投擲遊戲用的)飛碟;飛盤
furniture##[名詞] 傢俱
gain##[動詞] 得到;增進; [名詞] 獲得;增加;獲利;收益
garage##[動詞] 把(汽車等)送入車庫(或修理廠); [名詞] 車庫
gather##[動詞] 集合
general##[形容詞] 普遍的; [名詞] 將軍
generous##[形容詞] 慷慨的
genius##[名詞] 天才
gentle##[形容詞] 溫柔的
gentleman##[名詞] 紳士
geography##[名詞] 地理
gesture##[動詞] 做手勢,用動作示意; [名詞] 姿勢;表示
goal##[名詞] 目標;球門
gold##[形容詞] 金製的; [名詞] 黃金
golden##[形容詞] 金色的
golf##[動詞] 打高爾夫球; [名詞] 高爾夫球
goodness##[感歎詞] （表達強烈的感情，尤指驚奇）天哪; [名詞] 良善,美德
government##[名詞] 政府
granddaughter##[名詞] 孫女;外孫女
grandson##[名詞] 孫子;外孫
greedy##[形容詞] 貪心的
greet##[動詞] 問候;致敬
guard##[動詞] 保衛;看守; [名詞] 警衛
guest##[動詞] 款待,招待; [名詞] 客人
guide##[動詞] 引導; [名詞] 嚮導
gun##[動詞] 用槍射擊; [名詞] 槍
haircut##[名詞] 理髮
hall##[名詞] 大廳;講堂
hammer##[動詞] 敲打; [名詞] 鎚
handkerchief##[名詞] 手帕
handle##[動詞] 處理;搬弄; [名詞] 把手
hanger##[名詞] 衣架
heater##[名詞] 暖氣機
helicopter##[名詞] 直昇機
hero##[名詞] 英雄
highway##[名詞] 公路;幹道
hip##[名詞] 臀部
hippo##[名詞] 河馬
hire##[動詞] 雇用; [名詞] 租用,雇用
hole##[動詞] 鑿洞於,穿孔於;進入洞中; [名詞] 洞
homesick##[形容詞] 想家的
honesty##[名詞] 誠實
hop##[動詞] 單足跳;快速跳上（車輛）; [名詞] 單足跳;跳躍;麻藥(尤指鴉片)
horrible##[形容詞] 可怕的
host##[動詞] 主辦,主持;以主人身分招待; [名詞] 主人
housework##[名詞] 家務
hug##[動詞] 摟抱; [名詞] 緊抱;擁抱
human##[形容詞] 人類的; [名詞] 人
humble##[形容詞] 謙恭的;微賤的; [動詞] 使威信掃地;使…感到自慚
humid##[形容詞] 潮濕的
humor##[名詞] 幽默
humorous##[形容詞] 幽默的
hunger##[名詞] 饑餓
hunter##[名詞] 獵人
ignore##[動詞] 不理睬
ill##[形容詞] 生病的; [副詞] 惡劣地;困難地;不利地; [名詞] 不幸;禍害
imagine##[動詞] 想像
impolite##[形容詞] 沒禮貌的
importance##[名詞] 重要性
impossible##[形容詞] 不可能的
improve##[動詞] 改善
include##[動詞] 包含
income##[名詞] 收入
increase##[動詞] 增加; [名詞] 增加;增強
independent##[形容詞] 獨立的
indicate##[動詞] 指出
influence##[動詞] 影響,感化;左右; [名詞] 影響
information##[名詞] 資訊
ink##[動詞] 用墨水寫;簽署;簽訂(合同等); [名詞] 墨水
insist##[動詞] 堅持
inspire##[動詞] 鼓舞
instant##[形容詞] 即時的; [名詞] 瞬間
instrument##[名詞] 儀器
intelligent##[形容詞] 有才智的
international##[形容詞] 國際的
interrupt##[動詞] 打斷(談話和工作等)
introduce##[動詞] 介紹
invent##[動詞] 發明
invitation##[名詞] 邀請
iron##[形容詞] 鐵的;剛強的;殘酷的; [動詞] 熨燙; [名詞] 鐵;熨斗
jam##[動詞] 擠;夾傷; [名詞] 果醬;擁塞
jazz##[動詞] 使活潑;奏爵士樂;遊蕩; [名詞] 爵士樂
jealous##[形容詞] 嫉妒的
jeep##[名詞] 吉普車
journalist##[名詞] 新聞工作者
judge##[動詞] 判斷;審判; [名詞] 法官
kangaroo##[名詞] 袋鼠
ketchup##[名詞] 番茄醬
kilometer##[名詞] 公里
kindergarten##[名詞] 幼稚園
kingdom##[名詞] 王國
kitten##[名詞] 小貓
koala##[名詞] 澳洲產無尾熊
lack##[動詞] 缺乏; [名詞] 缺乏
lady##[名詞] 淑女
lamb##[動詞] 產羔羊; [名詞] 小羊
lantern##[名詞] 燈籠
latest##[形容詞] 最新的;最近的;最遲的
latter##[形容詞] 後者
law##[名詞] 法律
lay##[動詞] 置放;產卵
leaf##[動詞] 匆匆翻閱; 生葉片; [名詞] 樹葉
lettuce##[名詞] 類似萵苣的生菜
lick##[動詞] 舔; [名詞] 舔,舐;少量
lid##[名詞] 蓋子
lift##[動詞] 舉起; [名詞] 提,吊,升;鼓舞
lightning##[名詞] 閃電
likely##[形容詞] 有可能的; [副詞] 很可能
limit##[動詞] 限定; [名詞] 限度
link##[動詞] 聯繫,使相關聯; [名詞] 環節
liquid##[名詞] 液體
liter##[名詞] 公升
loaf##[名詞] 一條(麵包)
local##[形容詞] 本地的; [名詞] 當地居民
lock##[動詞] 鎖住; [名詞] 鎖
locker##[名詞] (公共場所的)衣物櫃
loser##[名詞] 輸家
ma'am##[名詞] 女士
magazine##[名詞] 雜誌
magician##[名詞] 魔術師
major##[形容詞] 較多的;主要的; [動詞] 主修; [名詞] 主修
male##[形容詞] 男性的; [名詞] 雄性動物
mall##[名詞] 大規模購物中心
manager##[名詞] 經理
mango##[名詞] 芒果
manner##[名詞] 舉止;態度
marry##[動詞] 結婚
marvelous##[形容詞] 了不起的；絕妙的
mass##[形容詞] 大眾的,民眾的;大量的; [名詞] 團;塊
master##[動詞] 精通; [名詞] 主人
mat##[名詞] 蓆子;墊子
match##[動詞] 相配; [名詞] 比賽,競賽;對手;相配者;火柴
maximum##[形容詞] 最大限度的; [名詞] 最高極限
measure##[動詞] 計量; [名詞] 尺寸,度量單位,【音】拍子;方法，措施（通常複數）
mechanic##[名詞] 技工
memory##[名詞] 記憶
men's room##[名詞] 男廁
message##[名詞] 消息;音信
metal##[形容詞] 金屬的; [名詞] 金屬
meter##[動詞] 用儀錶測量; [名詞] 公尺;計量器
method##[名詞] 方法
microwave##[動詞] 用微波爐烹調; [名詞] 微波爐；微波
midnight##[形容詞] 半夜的;漆黑的; [名詞] 午夜
minor##[形容詞] 較小的;較次要的; [動詞] 副修,兼修; [名詞] 未成年者;副科
minus##[形容詞] 負的,減去的; [介系詞] 減（去）; [名詞] 負號
mirror##[動詞] 反映,反射; [名詞] 鏡子
mix##[動詞] 混合; [名詞] 混和,攪和;結合
model##[動詞] 塑像;當模特兒; [名詞] 模型;模特兒
monster##[名詞] 怪物
mosquito##[名詞] 蚊子
motion##[動詞] 打手勢;搖(或點)頭示意;擺動,走; [名詞] 移動
movement##[名詞] 動作
MRT##[縮寫] 大眾捷運系統
musician##[名詞] 音樂家
napkin##[名詞] 餐巾
narrow##[形容詞] 窄的; [動詞] 變窄;收縮;減少
nation##[名詞] 國家
natural##[形容詞] 天然的
naughty##[形容詞] 頑皮的
necessary##[形容詞] 需要的
necklace##[名詞] 項鍊
needle##[動詞] (用話)刺激,挑逗;用針縫; [名詞] 針
negative##[形容詞] 否定的;負面的; [名詞] 否定語;負數;陰電;底片
neither##[形容詞] 兩者都不; [副詞] 也不; [連接詞] 也不; [代名詞] 兩者都不
nephew##[名詞] 侄子;外甥
nervous##[形容詞] 緊張的
nest##[動詞] 築巢;巢居;伏窩; [名詞] 巢
net##[形容詞] 純淨的,純的,淨值的;最終的; [動詞] 用網捕;使淨賺; [名詞] 網子
nice-looking##[形容詞] 好看的
niece##[名詞] 侄女;外甥女
nod##[動詞] 點頭; [名詞] 點頭
none##[副詞] 毫不,決不; [代名詞] 毫無;無一(人或物)
nor##[連接詞] 亦不
novel##[形容詞] 新的,新穎的,新奇的; [名詞] 小說
nut##[名詞] 核果
obey##[動詞] 服從
object##[動詞] 反對; [名詞] 物件
ocean##[名詞] 海洋
offer##[動詞] 提供; [名詞] 提供,提議;出價;報價
omit##[動詞] 略過
oneself##[代名詞] 自己
onion##[名詞] 洋蔥
operation##[名詞] 手術;操作
opinion##[名詞] 意見
ordinary##[形容詞] 平常的
oven##[名詞] 烤箱
overpass##[名詞] 天橋
overseas##[形容詞] 國外的; [副詞] 在海外
owner##[名詞] 物主
ox##[名詞] 公牛
pain##[動詞] 使煩惱,使痛苦;使疼痛; [名詞] 疼痛;痛苦
painful##[形容詞] 痛的
painter##[名詞] 油漆匠;畫家
pajamas##[名詞] 睡衣
pale##[形容詞] 蒼白的;黯淡的
pan##[名詞] 平鍋
panda##[名詞] 貓熊
pardon##[動詞] 寬恕; [名詞] 原諒,饒恕,寬恕;赦免
parking lot##[名詞] 停車場
parrot##[動詞] 機械地模仿; [名詞] 鸚鵡
partner##[名詞] 夥伴
passenger##[名詞] 乘客
path##[名詞] 小徑;路線
patient##[形容詞] 有耐心的,能忍受的; [名詞] 病人
pattern##[動詞] 仿造,模仿; [名詞] 圖案;模式
pause##[動詞] 中止; [名詞] 暫停,間歇;躊躇,猶豫
peace##[名詞] 和平
peaceful##[形容詞] 寧靜的;和平的
pepper##[動詞] 加胡椒粉於;使佈滿; [名詞] 胡椒;辣椒
perfect##[形容詞] 完美的; [動詞] 使完美;做完; [名詞] （動詞的）完成式
period##[名詞] 一段時間;一堂課
personal##[形容詞] 個人的
physics##[名詞] 物理
pigeon##[名詞] 鴿子
pile##[動詞] 堆起; [名詞] 一堆
pillow##[動詞] 枕著頭;靠; [名詞] 枕頭
pineapple##[名詞] 鳳梨
plain##[形容詞] 簡樸的;清楚的; [副詞] 完全地;徹底地;清楚地;平易地; [名詞] 平原
platform##[名詞] 月台;平台
pleasant##[形容詞] 愉快的;美好的
pleased##[形容詞] 欣喜的
plus##[形容詞] 正的;外加的;有益的;陽性的;正電的; [介系詞] 加(上); [連接詞] 外加;另有; [名詞] 正號
poem##[名詞] 詩
poison##[動詞] 放毒,下毒; [名詞] 毒物
pollute##[動詞] 污染
pollution##[名詞] 污染
pop music##[名詞] 流行音樂
population##[名詞] 人口
position##[動詞] 把...放在適當位置; [名詞] 位置
positive##[形容詞] 正面的;確信的; [名詞] 正面;正數;正片;(電池的)陽極
potato##[名詞] 馬鈴薯
powder##[動詞] 變成粉末;搽粉; [名詞] 粉
praise##[動詞] 讚美; [名詞] 讚揚,稱讚
precious##[形容詞] 寶貴的
president##[名詞] 校長;總統
pressure##[動詞] 對...施加壓力;迫使; [名詞] 壓力
priest##[名詞] 牧師;神父
primary##[形容詞] 主要的;初級的; [名詞] (次序,質量等)居首位的事物;原色;初選
prince##[名詞] 王子
princess##[名詞] 公主
principal##[形容詞] 主要的,首要的;資本的,本金的; [名詞] (中小學)校長
principle##[名詞] 主義;真諦
print##[動詞] 印刷;用印刷體寫; [名詞] 圖片印刷品;出版物
printer##[名詞] 印表機;印刷業者
private##[形容詞] 私人的
produce##[動詞] 製造;出產; [名詞] 農產品
production##[名詞] 製造;生產
professor##[名詞] 教授
progress##[動詞] 前進;進行;上進,提高,進步; [名詞] 進步
project##[動詞] 計劃;企劃;突出,伸出;投射; [名詞] 計畫
promise##[動詞] 答應; [名詞] 承諾,諾言;希望,前途
pronounce##[動詞] 發...音
protect##[動詞] 保護
provide##[動詞] 供應
pump##[動詞] 跳動;使用唧筒; [名詞] 唧筒;打氣機;抽水機
punish##[動詞] 處罰
purpose##[名詞] 目的
purse##[名詞] 錢包
puzzle##[動詞] 使迷惑; [名詞] 謎
quit##[動詞] 放棄;離職
railroad##[名詞] 鐵路
railway##[名詞] 鐵路
raincoat##[名詞] 雨衣
rare##[形容詞] 罕見的
rather##[副詞] 寧可;頗為
realize##[動詞] 認知;實現
receive##[動詞] 收到
record##[動詞] 記錄;錄音; [名詞] 記錄;唱片
recover##[動詞] 尋回;恢復
rectangle##[名詞] 長方形
recycle##[動詞] 回收
refuse##[動詞] 拒絕; [名詞] 廢物;垃圾;渣滓
regret##[動詞] 懊悔; [名詞] 懊悔,悔恨;抱歉,遺憾;哀悼
regular##[形容詞] 通常的;定期的; [名詞] 正規兵;老客戶;長工;普通尺寸
reject##[動詞] 拒絕
remind##[動詞] 提醒
rent##[動詞] 租; [名詞] 租金,租費
repair##[動詞] 修理; [名詞] 修理
respect##[動詞] 尊敬; [名詞] 尊敬
responsible##[形容詞] 負責任的
result##[動詞] 發生,產生;結果;導致; [名詞] 結果
return##[動詞] 回;還; [名詞] 回答;收益;利息;來回票;退貨
review##[動詞] 溫習;回顧; [名詞] 復習
revise##[動詞] 校訂;更改
rob##[動詞] 搶劫
role##[名詞] 角色
roller##[名詞] 滾筒
roof##[動詞] 給...蓋屋頂,覆蓋; [名詞] 屋頂
rub##[動詞] 磨擦; [名詞] 摩擦,擦;阻難;疑難點
rubber##[形容詞] 橡膠製成的; [名詞] 橡膠
rude##[形容詞] 無禮的
ruin##[動詞] 毀滅; [名詞] 毀滅;崩潰;廢墟;傾家蕩產
rush##[動詞] 催促;急送; [名詞] 急速行動;(交通等的)繁忙;搶購
safety##[名詞] 安全
sailor##[名詞] 水手
sample##[動詞] 取...的樣品;抽樣檢查; [名詞] 樣品
sand##[動詞] 磨光;以沙堵塞; [名詞] 沙
satisfy##[動詞] 使滿意
saucer##[名詞] 淺碟
scarf##[名詞] 圍巾
scene##[名詞] 景色;場面
scenery##[名詞] 風景
scientist##[名詞] 科學家
score##[動詞] 得分; [名詞] 得分; 二十; 刻痕; 樂譜
seafood##[名詞] 海產食品
search##[動詞] 搜尋;搜查; [名詞] 搜查,搜尋;檢查;探索,調查
secondary##[形容詞] 第二的;次要的
secret##[形容詞] 神祕的,奧祕的; [名詞] 秘密
section##[動詞] 把...分成段(或組等);將...切片; [名詞] 節;斷面
seek##[動詞] 尋覓
seem##[動詞] 似乎是
select##[形容詞] 精選的;卓越的; [動詞] 挑選
selfish##[形容詞] 自私的
semester##[名詞] 學期
sense##[動詞] 意識到;了解,領會; [名詞] 感官;官能
servant##[名詞] 雇工
serve##[動詞] 服務
shall##[助動詞] 將;應該
shark##[名詞] 鯊魚
sheet##[名詞] 一張(紙);床單
shelf##[名詞] 架子
shoot##[動詞] 注射;射擊;拍攝; [名詞] 幼芽,幼枝;狩獵(隊);射擊;拍攝
shore##[名詞] 岸邊
shrimp##[名詞] 蝦子
shut##[形容詞] 關閉的，關上的; [動詞] 關閉
silence##[動詞] 使沈默;使啞口無言;使安靜; [名詞] 寂靜
silent##[形容詞] 寂靜的
silly##[形容詞] 傻的;無聊的
silver##[形容詞] 銀的;銀白的; [名詞] 銀
similar##[形容詞] 相似的
sincere##[形容詞] 誠懇的
single##[形容詞] 單一的;獨身的; [動詞] 選出,挑出;擊出一壘安打; [名詞] 單的;一壘安打
sink##[動詞] 沉下;陷於; [名詞] 洗物槽
skate##[動詞] 溜冰; [名詞] 冰鞋
ski##[動詞] 滑雪; [名詞] 滑雪屐
skill##[名詞] 技能
skillful##[形容詞] 有技術的, 熟練的
skin##[動詞] 植皮;癒合;脫皮; [名詞] 皮膚
skinny##[形容詞] 很瘦的
sleepy##[形容詞] 想睡的
slender##[形容詞] 纖細的
slice##[動詞] 切成薄片; [名詞] 薄片
slippers##[名詞] 拖鞋
snail##[名詞] 蝸牛
sneakers##[名詞] 球鞋
sneaky##[形容詞] 鬼鬼祟祟的
snowman##[名詞] 雪人
soap##[動詞] 用肥皂擦洗;向...灌迷魂湯; [名詞] 肥皂
social##[形容詞] 社會的;交際的
society##[名詞] 社會
soda##[名詞] 蘇打;汽水
soft drink##[片語] （不含酒精的）軟性飲料；汽水; [名詞] 冷飲
softball##[名詞] 壘球
solve##[動詞] 解決
soul##[名詞] 靈魂
sour##[形容詞] 酸的; [動詞] 使變酸;厭煩;變壞; [名詞] 酸味;酸的東西
soy-sauce##[名詞] 醬油
spaghetti##[名詞] 義大利麵條
speaker##[名詞] 演講者;揚聲器
speech##[名詞] 言論;演講；詞（類）
speed##[動詞] 加速;促進; [名詞] 速度
spirit##[名詞] 精神
spot##[動詞] 沾污;注意到; [名詞] 斑點;場所
spread##[動詞] 展開;散布; [名詞] 蔓延;普及;價格差異
state##[形容詞] 正式的;官方的;國家的; [動詞] 陳述; [名詞] 狀態；美國的州
stationery##[名詞] 文具
steal##[動詞] 偷竊
steam##[動詞] 蒸; [名詞] 蒸氣
step##[動詞] 跨(步);踏(腳); [名詞] 步;臺階
stingy##[形容詞] 小氣的
stomachache##[名詞] 胃痛
stone##[動詞] 用石頭鋪;用磨刀石磨; [名詞] 石頭
storm##[動詞] 猛攻; [名詞] 暴風雨
stormy##[形容詞] 暴風雨的
stove##[名詞] 爐灶
straw##[名詞] 稻草;吸管
stream##[動詞] 流;蜂擁而進; [名詞] 溪流
strike##[動詞] 打擊;(鐘)敲響; [名詞] 攻擊;罷工
style##[動詞] 稱呼;命名;設計;使成為時髦; [名詞] 時尚;風格;文體
subway##[名詞] 地鐵
succeed##[動詞] 成功
success##[名詞] 成功
such##[形容詞] 如此的; [代名詞] 這樣的人(或事物);上述的人(或事物)
sudden##[形容詞] 突然的; [名詞] 突然發生的事
suggest##[動詞] 建議
suit##[動詞] 適合;相稱;彼此協調; [名詞] 一套衣服;訴訟
super##[形容詞] 超級的; [副詞] 很;極
supper##[名詞] 晚餐
support##[動詞] 支持; [名詞] 支持
survive##[動詞] 在...之後仍然活著
swallow##[動詞] 吞嚥; [名詞] 吞嚥;燕子
swan##[名詞] 天鵝
sweep##[動詞] 掃; [名詞] 掃除
swimsuit##[名詞] 泳衣
symbol##[名詞] 符號;象徵
system##[名詞] 系統
table tennis##[名詞] 乒乓球
talent##[名詞] 天才
talkative##[形容詞] 好說話的
tangerine##[名詞] 橘子
tank##[名詞] 槽;坦克
teapot##[名詞] 茶壺
tear##[動詞] 撕; [名詞] 眼淚
temperature##[名詞] 溫度
tent##[名詞] 帳篷
term##[動詞] 把...稱為,把...叫做; [名詞] 術語;學期
terrific##[形容詞] 非常好的;可怕的
textbook##[名詞] 教科書
therefore##[副詞] 因此
thief##[名詞] 小偷
thumb##[動詞] 用拇指翻動;迅速翻閱;豎起拇指要求搭車; [名詞] 拇指
thunder##[動詞] 打雷;大聲斥責;威嚇; [名詞] 雷
till##[介系詞] 直到; [連接詞] 直到...為止
tiny##[形容詞] 微小的
title##[動詞] 加標題於;授頭銜於; [名詞] 標題;頭銜
tofu##[名詞] 豆腐
toilet##[名詞] 馬桶
tongue##[動詞] 舔;用舌吹(管樂器);發(音); [名詞] 舌頭
toothache##[名詞] 牙痛
toothbrush##[名詞] 牙刷
toward##[介系詞] 向;對
tower##[動詞] 高聳,屹立;勝過;高飛,翱翔; [名詞] 塔
trace##[動詞] 追蹤;描繪; [名詞] 蹤跡
trade##[動詞] 交換; 做買賣,進行交易; [名詞] 貿易
tradition##[名詞] 傳統
traditional##[形容詞] 傳統的
trap##[動詞] 設陷阱; [名詞] 陷阱;圈套
travel##[動詞] 旅行; [名詞] 旅行
treasure##[動詞] 珍愛; [名詞] 財寶
triangle##[名詞] 三角形
trousers##[名詞] 長褲
trumpet##[動詞] 吹喇叭; [名詞] 小喇叭
trust##[動詞] 信任; [名詞] 信任,信賴;託管,信託
truth##[名詞] 事實;真相
tub##[名詞] 浴缸
tube##[名詞] 管子
tunnel##[動詞] 挖掘隧道; [名詞] 隧道
turkey##[名詞] 火雞
underline##[動詞] 劃線於...之下;強調; [名詞] 底線
underpass##[名詞] 地下通道
underwear##[名詞] 內衣
unique##[形容詞] 獨特的; [名詞] 獨一無二的人(或事物)
universe##[名詞] 宇宙
university##[名詞] 大學
upon##[介系詞] 在...之上
upper##[形容詞] 較高的; [名詞] 鞋幫;上舖;上排假牙
upstairs##[形容詞] 樓上的; [副詞] 樓上地; [名詞] 樓上
usual##[形容詞] 例常的
valley##[名詞] 山谷
valuable##[形容詞] 有價值的
value##[動詞] 估價,評價;尊重;重視; [名詞] 價值
vendor##[名詞] 小販
vest##[名詞] 背心
victory##[名詞] 勝利
village##[名詞] 村落
vinegar##[名詞] 醋
vocabulary##[名詞] 字彙
volleyball##[名詞] 排球
vote##[動詞] 投票; [名詞] 選舉,投票,表決
waist##[名詞] 腰
war##[動詞] 戰爭,打仗;鬥爭;對抗; [名詞] 戰爭
waste##[動詞] 浪費; [名詞] 浪費;垃圾,廢料
waterfall##[名詞] 瀑布
weekday##[名詞] 工作日
weight##[名詞] 重量
whale##[名詞] 鯨魚
wheel##[動詞] 旋轉,轉動; [名詞] 輪子
whole##[形容詞] 完整的; [名詞] 全部,全體;整體
wild##[形容詞] 野生的;無法無天的; [副詞] 狂暴地;無控制地;胡亂地; [名詞] 荒野,荒地;未開發的地方
wing##[動詞] 在...裝翼;飛行; [名詞] 翅膀
winner##[名詞] 贏家
wok##[名詞] 帶把的中國炒菜鍋
wolf##[名詞] 狼
women's room##[名詞] 女廁所
wood##[名詞] 木材
woods##[名詞] 樹林;森林
worm##[動詞] 蠕動;潛行;鑽入; [名詞] 蠕蟲
wound##[動詞] 傷害; [名詞] 傷口
wrist##[名詞] 手腕
yell##[動詞] 吼叫; [名詞] 叫喊;吼叫;歡呼
youth##[名詞] 青少年;青少年時代
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
