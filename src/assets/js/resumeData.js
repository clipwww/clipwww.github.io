const skills = [
    { name: "HTML", value: 20 },
    { name: "CSS", value: 20 },
    { name: "JavaScript", value: 20 },
    { name: "Vue.js", value: 20, color: "#42b883" },
    { name: "React.js", value: 10 },
    { name: "SCSS", value: 16 },
    { name: "Git", value: 12 },
    { name: ".NET MVC C#", value: 17 },
    { name: "C# Razor", value: 20 },
    { name: "MS SQL", value: 10 },
    { name: "LINQ", value: 15 },
    { name: "Node.js", value: 10 },
    { name: "Webpack", value: 10 },
    { name: "Gulp", value: 12 },
    { name: "PHP", value: 10 },
    { name: "jQuery", value: 20 },
    { name: "RWD", value: 17 },
    { name: "Cross-browser", value: 17 },
    { name: "Nuxt.js", value: 10, color: "#42b883" },
    { name: "PotoShop", value: 10 },
]

const timeline = [

    {
        date: new Date(),
        content: `
<p align="center">

<i class="ion-briefcase" style="font-size: 30px;"></i><br/>
在 蝦米智慧媒體 工作<br/>
<span style="font-size: 12px;color:#808080;">2016年3月 - 2017年7月</span><br/>
<span style="font-size: 12px;color:#808080;">Web Front-End Engineer</span>

</p>
`
    },
    {
        date: new Date("2015-09-01"),
        content: `
<p align="center">

<i class="ion-university" style="font-size: 30px;"></i><br/>
在 東海大學 就讀<br/>
<span style="font-size: 12px;color:#808080;">2013年9月 - 2015年9月</span><br/>
<span style="font-size: 12px;color:#808080;">研究所--資訊管理系</span>

</p>
`
    },
    {
        date: new Date("2013-06-01"),
        content: `
<p align="center">

<i class="ion-university" style="font-size: 30px;"></i><br/>
在 東海大學 就讀<br/>
<span style="font-size: 12px;color:#808080;">2009年9月 - 2013年6月</span><br/>
<span style="font-size: 12px;color:#808080;">大專學院--資訊工程系</span>

</p>
`
    },
    {
        date: new Date("2009-06-01"),
        content: `
<p align="center">

<i class="ion-university" style="font-size: 30px;"></i><br/>
在 台北市立育成高中 就讀<br/>
<span style="font-size: 12px;color:#808080;">2006年9月 - 2009年6月</span><br/>
<span style="font-size: 12px;color:#808080;">高中</span>

</p>
        `
    },
    {
        date: new Date("1990-03-30"),
        content: `
<p align="center">

<i class="ion-person-add" style="font-size: 30px;"></i><br/>
出生<br/>
<span style="font-size: 12px;color:#808080;">1990年3月30日</span>

</p>
        `
    },

]

const about = {
    about: `
　　從模仿、研究他人的網站原始碼到寫出自己的一頁式網頁，從空白到完成一個可看到畫面的網頁，那種成就感讓自己對於前端的領域（大坑）開始產生極大興趣，熱衷於研究HTML、CSS、JavaScript使用技巧與新技術，對於不懂不熟悉的東西會自己搜尋解答、閱讀官方文件，向他人詢問時也會將問題整理清楚。\n
　　進入職場後與後端同事合作串接資料並且學習討教.NET MVC C#的後端技術；在與前端同事一起研究新的JS Framework時，被vue的方便以及強大所吸引，有參加過【vuedinner】（由<a href="https://www.facebook.com/groups/vuejs.tw/?fref=ts" target="_blank">vue.js台灣</a>主辦的線下vue分享會）、【<a href="https://www.facebook.com/groups/616281401885574/?fref=ts" target="_blank">線上讀書會</a>】以及【<a href="https://www.facebook.com/bosscodingplease/?fref=ts">老闆，來點寇汀吧。</a>】線上直播Coding，學習吸收vue相關的技術以及一些的開發技巧，也開始有將vue嘗試使用於專案中。\n
　　希望能夠加入以Vue開發專案的團隊，增強自己使用vue開發專案的能力、熟練目前眾多新穎的前端技術與Node.js相關的工具（Webpack、Gulp、Express、Nuxt.js等）。
    `,
    skill: `
HTML、CSS
--------------------
<hr/>
- 理解HTML5語意化標籤、各元素的特性
- 通常習慣使用Bootstrap，但也可以在不使用的情況下完成網頁切版（含RWD）
- 會使用css預處理器Scss加速開發
- 有處理誇瀏覽器支援度問題的經驗（IE10以上）
- 略懂一點 flex-box
\n
JavaScrip
----------------------
<hr/>
- 理解JS的基礎特性跟其特殊的地雷
- 熟悉JS函式庫 jQuery 的使用
- 能自行研究套件的文件，使用套件幫助網頁快速開發
- 略懂一點ES6語法
\n
Vue.js
---------------------
<hr/>
- 熟悉vue的基礎使用
- 能夠撰寫vue組件，重覆使用
- 使用過vue-router、vuex、vue-cli、vee-vaildate
- 最近正在研究Nuxt.js
\n
Git
----------------------
<hr/>
- 理解Git的基本概念，可以使用命令視窗的方式操作Git
- 有與同事使用Git控制專案版本的經驗
- 有使用分支進行開發的經驗
\n
.NET MVC C#、MS SQL
----------------------
<hr/>
- 理解.NET MVC架構與運作
- 熟悉View Razor語法的撰寫方式
- 可以自行撰寫controller做邏輯處理
    - 權限管理
    - 頁面導向
    - 表單資料處理
    - API
- 會使用LINQ語法查詢、變更資料庫資料
- 會使用SQL Server Management查詢資料庫資料
    `,
    experience: `
工作經歷
===========
<hr/>
<h3>蝦米智慧媒體</h3>
網頁前端工程師（Web Front-End Engineer）\n
2016 / 03 － 2017 / 07 \n
- 負責開發官網、活動網站、APP內嵌網頁或內部系統網站
    - 切版、RWD、誇瀏覽器問題處理
    - 表單驗證、前端防呆處理
    - 與後端串接資料
    - 與APP串接網頁
- 舊專案維護
- 
-
    
    `
};

//<p style="font-size:12px">p.s. 雖然是以vue為主，但個人也不排斥學習React.js（對於React僅有照著教學寫ToDo List的經驗）</p>
// - 使用變數統一管理顏色跟一些參數，減少要變更顏色或高寬時需要大量更改的麻煩
// - 使用mixin建立方便的工具，如建立可產生前綴的animation、transform等的工具
// - 使用placeholder建立常用的css，減少重覆撰寫的麻煩
export default {
    skills,
    timeline,
    about
}