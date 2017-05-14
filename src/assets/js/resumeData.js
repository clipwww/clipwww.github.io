const skills = [
    { name: "HTML", value: 20 },
    { name: "CSS", value: 20 },
    { name: "JavaScript", value: 20 },
    { name: "Vue.js", value: 20, color: "#42b883" },
    { name: "SCSS", value: 16 },
    { name: "Git", value: 12 },
    { name: ".NET MVC", value: 18 },
    { name: "C# Razor", value: 20 },
    { name: "Node.js", value: 10 },
    { name: "Webpack", value: 10 },
    { name: "Gulp", value: 12 },
    { name: "PHP", value: 10 },
    { name: "jQuery", value: 20 },
    { name: "RWD", value: 17 },
    { name: "Cross-browser", value: 17 },
]

const timeline = [

    {
        date: new Date(),
        content: `
<p align="center">

<i class="ion-briefcase" style="font-size: 30px;"></i><br/>
在 蝦米智慧媒體 工作<br/>
<span style="font-size: 12px;color:#808080;">2016年3月 - Now</span><br/>
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

export default {
    skills,
    timeline
}