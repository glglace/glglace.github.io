//=======================================================
// HTML5 Speaking 題庫設定檔
//=======================================================
//
//---------------------------------------------------
//【題庫設定】
//---------------------------------------------------
//
//欄位分隔符號為兩個井字號(##)
seperator = '##';

//
//【題目設定】
//  一行一題, 
//  欄位左起
//    第一欄為英文
//    第二欄為中文
//    第三欄為圖片檔的路徑
//
//sunny##晴朗的
//windy##有風的
//rainy##下雨的
//snowy##下雪的
//cloudy##多雲的

questionLines = function(){/*--這一行請勿更改--
How's the weather?##測試
It's sunny.##測試
It's windy.##測試
It's snowy.##測試
It's cloudy.##測試
It's rainy.##測試
-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);
