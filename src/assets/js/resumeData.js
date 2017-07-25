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
　　最初由模仿、研究他人的網站原始碼試著寫出自己的一頁式網頁，從空白到完成一個可看到畫面的網頁，那種成就感讓自己對於前端這個大坑產生極大興趣，透過網路資源（如Codecademy、w3schools、FreeCodeCamp）以及購買書籍開始接觸、自學前端基礎。熱衷於研究HTML、CSS、JavaScript使用技巧與新技術，對於不懂不熟悉的東西會自己搜尋解答、閱讀官方文件，向他人詢問時也會將問題整理清楚。\n
　　受到vue的方便以及強大所吸引，有參加過【vuedinner】（由<a href="https://www.facebook.com/groups/vuejs.tw/?fref=ts" target="_blank">vue.js台灣</a>主辦的線下vue分享會），也會抽空觀看【<a href="https://www.facebook.com/groups/616281401885574/?fref=ts" target="_blank">線上讀書會</a>】的分享以及【<a href="https://www.facebook.com/bosscodingplease/?fref=ts">老闆，來點寇汀吧。</a>】線上直播Coding，學習吸收vue相關的技術以及一些的開發技巧，並已經有將vue嘗試使用於專案中的經驗。\n
　　希望能夠加入以vue開發專案的團隊，增強自己使用vue開發專案的能力、熟練目前眾多新穎的前端技術與Node.js相關的工具（Webpack、Gulp、Express、Nuxt.js等）。\n
　　我的個性雖較為內向但待人溫和易相處以及配合度高，重視團隊精神、合群且負責任，不隨意誇大自己的付出，在團體生活中能與他人和諧相處。平日興趣為看棒球（雖然已無高中時每天看中華職棒的動力，但仍有持續關注旅外選手的比賽）、漫畫、動畫與電影（很喜歡進電影院享受特效大片或是製作精美的動畫片）以及吃好吃的東西。\n
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
- 理解JS的基礎特性
- 熟悉JS函式庫 jQuery 的使用
- 能夠自行閱讀文件、查詢資料研究插件，幫助專案開發
- 略懂一點ES6語法
\n
Vue.js
---------------------
<hr/>
- 熟悉vue的基礎使用
- 能夠已組件化的開發方式使用vue
- 使用過vue-router、vuex、vee-vaildate、vue-cli
- 最近正在研究Nuxt.js
\n
Git
----------------------
<hr/>
- 理解Git的基本概念，可以使用command-line操作Git
- 有與同事使用Git控制專案版本的經驗
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
- 能夠使用LINQ語法查詢、新增、修改與刪除資料庫資料
- 能夠簡單操作SQL Server Management來查詢資料庫資料、建立資料表及欄位、匯出指令碼
    `,
    experience: `
工作經歷
===========
<hr/>
<h3>蝦米智慧媒體</h3>
網頁前端工程師（Web Front-End Engineer）\n
2016 / 03 － 2017 / 07 \n
- 負責開發官網、活動網站、APP內嵌網頁或內部系統網站
    - 配合設計畫面切版（RWD）
    - 誇瀏覽器處理
    - 與後端串接資料
    - 串接客戶或其他廠商API
- 舊專案維護
- 詳細見<a href="/#/Work">專案</a>
\n
<br/>
學歷
============
<hr/>
<h3>東海大學資管所碩士</h3>
2013 / 09 － 2015 / 09 \n
<h3>東海大學資工系學士</h3>
2009 / 09 － 2013 / 06 \n
    `
};

const works = [{
        id: 1,
        title: "勝悅髮型 | 群悅Spa",
        company: "蝦米智慧媒體",
        tags: ['官網', '.NET MVC']
    },
    {
        id: 2,
        title: "寶島眼鏡 Eye-Catch & EyeFamily",
        company: "蝦米智慧媒體",
        tags: ['官網', '.NET MVC', 'vue.js 1.0']
    },
    {
        id: 3,
        title: "Kia Life+ App",
        company: "蝦米智慧媒體",
        tags: ['後台網站', 'APP內嵌網頁', '.NET MVC']
    },
    {
        id: 4,
        title: "麗寶 Outlet Mall",
        company: "蝦米智慧媒體",
        tags: ['官網', '.NET MVC']
    },
    {
        id: 5,
        title: "南山人壽 | 天外祈ㄐㄧ",
        company: "蝦米智慧媒體",
        tags: ['活動網頁', 'vue.js']
    },
    {
        id: 6,
        title: "寶島眼鏡門市平板內嵌網頁",
        company: "蝦米智慧媒體",
        tags: ['APP內嵌網頁', 'vue.js']
    },
    {
        id: 7,
        title: "環球購物中心 Globall Mall",
        company: "蝦米智慧媒體",
        tags: ['官網', '.NET MVC', 'vue.js']
    },
    {
        id: 8,
        title: "某企業內部電子化表單",
        company: "蝦米智慧媒體",
        tags: ['內部網站', 'vue.js']
    }

];

//<p style="font-size:12px">p.s. 雖然是以vue為主，但個人也不排斥學習React.js（對於React僅有照著教學寫ToDo List的經驗）</p>
// - 使用變數統一管理顏色跟一些參數，減少要變更顏色或高寬時需要大量更改的麻煩
// - 使用mixin建立方便的工具，如建立可產生前綴的animation、transform等的工具
// - 使用placeholder建立常用的css，減少重覆撰寫的麻煩
export default {
    skills,
    timeline,
    about,
    works
}