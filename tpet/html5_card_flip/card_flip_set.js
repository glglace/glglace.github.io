﻿//-------------------------------
// html5 card clip 題庫設定檔
//-------------------------------

//標題，會出現在一進入程式的畫面
//當題目沒有設定題幹時，最上方就改顯示此內容
title = "大家一起來";

//是否依題庫的順序出題。
//	1 : 按順序出題
//	0 : 以亂數抽題
show_by_list = 1;


//計分板上的組別名稱
//不同組間用半形逗號分隔
//最多可以有七組
//如果不想出現計分板，這個參數就不做任何設定
team_names = "第1組,第2組,第3組,第4組";


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


//題庫欄位分隔符號
seperator = ',';

//-----------------------------------
//題幹、答案、提示及分數。
//-----------------------------------
//	每一題組使用多行，
//
//	每一行代表翻牌區中的一張牌，
//		一行接一行，
//		空白行代表該題結束。
//
//	每一行可以有四個欄位，以半形逗號當欄位分隔。(#2021.11.02 加入第四欄位)
//
//	每一題組第一行的第一個欄位 : 出現在畫面最上方的「題幹」，
//	每一題組第一行的第二個欄位 : 翻牌區中的最後一張牌 (右下角) 的「答案」。
//
//	每一題組由第二行起代表著一張牌及其分數，
//		第一個欄位 : 牌的內容，
//		第二個欄位 : 分數。
//
//		#2021.04.27加入
//		第三個欄位 : 按下後會出現對話框, 對話框的內容, 可以是圖片、mp3或文字
//						利用「半形井字號」當分隔，可放入不同的素材
//
//		#2021.11.02 加入
//		第四個欄位 : 網址，按下對話框的文字或圖片時，會開啟的連結。
//
//
question_answer_hint_score = function(){/*--這一行請勿更改--
天氣突然變冷，你想吃或喝什麼？,我都想吃！
火鍋,11
薑母鴨、麻油雞,7
燒仙草,4
薑母茶,3
咖啡,3
地瓜薑湯,2
熱豆花,2
珍珠奶茶,1
紅豆湯,1
素紅燒麵,1
茶葉蛋,1

猜猜看,腳踏車,assets/sample-photo-bike.jpg,https://zh-yue.wikipedia.org/wiki/%E5%96%AE%E8%BB%8A
節能省碳,10
摩門教,5
練習曲,3
輪子,2,assets/sample-photo-wheel.png
鐵馬,1

國小220英語單字-動物類-四足,animal
bear,4~8
cat,3
dog,3
elephant,8~12
horse,5
lion,4
monkey,6
pig,3
rabbit,6~10
tiger,5
turtle,6~10

-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);