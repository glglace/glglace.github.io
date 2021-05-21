
caption ='國小220單';

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
bee ## 蜜蜂
bear ## 熊
bird ## 鳥
cat ## 貓
dog ## 狗
dragon ## 龍
duck ## 鴨
elephant ## 象
horse ## 馬
lion ## 獅子
monkey ## 猴
pig ## 豬
rabbit ## 兔子
tiger ## 虎
turtle ## 龜
bag ## 袋子、包包
dress ## 連衣裙
jacket ## 夾克
jeans ## 牛仔褲
pants ## 褲子
shoes ## 鞋
shorts ## 短褲
skirt ## 短裙
T-shirt ## T恤衫
blue ## 藍色
green ## 綠色
purple ## 紫色
red ## 紅色
yellow ## 黃色
Taiwan ## 台灣
brother ## 兄弟
father ## 父親
grandfather ## 祖父
grandmother ## 祖母
mother ## 母親
sister ## 姊妹
apple ## 蘋果
banana ## 香蕉
bread ## 麵包
breakfast ## 早餐
cake ## 蛋糕
candy ## 糖果
chicken ## 雞
chocolate ## 巧克力
cola ## 可樂
cook ## 廚師
cookie ## 餅乾
dinner ## 晚餐
drink ## 喝
eat ## 吃
fish ## 魚
hamburger ## 漢堡
hot ## 熱的
hot dog ## 熱狗
hungry ## 飢餓的
ice cream ## 冰淇淋
juice ## 果汁
lunch ## 午餐
milk ## 牛奶
noodle ## 麵條
orange ## 柳橙
papaya ## 木瓜
pizza ## 比薩
rice ## 米飯
sandwich ## 三明治
thirsty ## 口渴的
water ## 水
cold ## 寒冷的
headache ## 頭痛
sick ## 生病的
strong ## 強壯的
tired ## 疲累的
Christmas ## 聖誕
Easter ## 復活節
basket ## 籃子
bathroom ## 浴室
bedroom ## 臥室
chair ## 椅子
clean ## 清潔、乾淨的
computer ## 電腦
desk ## 有抽屜的桌子
dining room ## 飯廳
home ## 家
key ## 鑰匙
kitchen ## 廚房
sofa ## 沙發
study ## 讀書
table ## 桌子
wash ## 洗
eight ## 八
eighteen ## 十八
eighty ## 八十
eleven ## 十一
fifteen ## 十五
fifty ## 五十
five ## 五
forty ## 四十
four ## 四
fourteen ## 十四
hundred ## 一百
nine ## 九
nineteen ## 十九
ninety ## 九十
one ## 一
seven ## 七
seventeen ## 十七
seventy ## 七十
six ## 六
sixteen ## 十六
ten ## 十
thirteen ## 十三
thirty ## 三十
three ## 三
twelve ## 十二
twenty ## 二十
two ## 二
doctor ## 醫生
nurse ## 護士
police ## 警察
singer ## 歌手
dirty ## 骯髒的
great ## 很好的、偉大的
bell ## 鈴鐺、鐘
cell phone ## 手機
flower ## 花
robot ## 機器人
fall ## 秋季
get ## 得到
go ## 走、去
jump ## 跳
see ## 看到
sleep ## 睡覺
take ## 採取、拿
walk ## 步行
ear ## 耳
eye ## 眼
hand ## 手
mouth ## 口
nose ## 鼻子
cool ## 涼爽的
happy ## 快樂的
old ## 舊的
sad ## 傷心的
short ## 短的、矮的
tall ## 高的
thin ## 瘦的、苗條的
bookstore ## 書店
department store ## 百貨商店
hospital ## 醫院
park ## 公園
post office ## 郵局
restaurant ## 餐廳
supermarket ## 超級市場
zoo ## 動物園
like ## 喜歡
on ## 在...上面
under ## 在...下面
box ## 盒子、箱子
Chinese ## 中文
English ## 英語
eraser ## 橡皮擦
friend ## 朋友
glasses ## 眼鏡
library ## 圖書館
listen ## 聽
marker ## 麥克筆
math ## 數學
pencil ## 鉛筆
read ## 讀
ruler ## 尺
school ## 學校
science ## 科學
student ## 學生
teacher ## 老師
write ## 寫
big ## 大的
long ## 長的
small ## 小的
baseball ## 棒球
basketball ## 籃球
card ## 卡片
comic ## 漫畫
dance ## 跳舞
draw ## 畫畫
music ## 音樂
play ## 玩
race ## 比賽、種族
run ## 跑
sing ## 唱
swim ## 游泳
afternoon ## 下午
Friday ## 星期五
Monday ## 星期一
next ## 下一個
Saturday ## 星期六
spring ## 春季
summer ## 夏季
Sunday ## 星期日
Thursday ## 星期四
Tuesday ## 星期二
watch ## 看、手錶
Wednesday ## 星期三
winter ## 冬季
bike ## 自行車
bus ## 公車
car ## 汽車
fly ## 飛
MRT ## 捷運
ride ## 騎
taxi ## 計程車
train ## 火車
cloudy ## 多雲的
moon ## 月亮
rainy ## 多雨的
star ## 星
sunny ## 晴朗的
warm ## 溫暖的
windy ## 有風的
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
