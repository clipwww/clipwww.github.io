import { Module } from 'vuex';

import { WorkVM } from '@/view-models/work.vm';

const works: WorkVM[] = [
  {
    companyName: '香港商阿爾伊股份有限公司台灣分公司',
    projects: [
      {
        title: 'RE Package',
        description: `
          ### 開發、維護公司內部可共用的package
          - 將TapPay SDK包成Vue Component供Vue專案使用
          - RE活動常用的各種Tool、Method
          - 一些格式驗證、Formatter工具
          - 活動用的翻盤遊戲、接東西遊戲
        `,
        tag: ['Typescript', 'TsLint', 'jQuery', 'Vue', 'Pixi.js', 'TapPay SDK'],
      },
      {
        title: 'RE App 活動頁面',
        description: `
          ### RE紅包的活動
          - 與後端合作開發建置
          - 接手設計師的gulp，從一開始單純的 html + minify js、css，為了讓活動開發更舒服，使用babel、browserify與typescript，也建置活動用的utilities供同事開發使用。
        `,
        tag: ['gulp', 'babel', 'browserify', 'TypeScript', 'jQuery', 'Scss'],
      },
      {
        title: 'RE Admin 內部管理系統',
        description: `
          ### 內部使用的管理系統
          - 接手與後端以及前端同事合作維護、開發新功能
        `,
        tag: ['Express', 'TypeScript', 'Nuxt', 'Vue', 'Element-UI', 'Vuex', 'Vue i18n', 'GraphQL', 'Apollo GraphQL', 'Vue Apollo', 'Google Map Api', 'Scss'],
      },
      {
        title: 'RE Boss 店家管理系統',
        description: `
          ### 聯盟店家的後台管理系統，結帳、退貨、發行折價券、查看訂單紀錄與統計資料等功能
          - 接手與後端以及前端同事合作維護、開發新功能
          - 串接 Tapay 免跳轉信用卡支付服務
        `,
        tag: ['Express', 'Nuxt', 'Vue', 'Vuex', 'Vue i18n', 'Tappay SDK', 'Scss', 'D3.js', 'sharp.js'],
      },
      {
        title: 'RE市場開發系統',
        description: `
          ### 供與RE紅包合作的開發商申請店家使用
          - 與後端合作開發建置
          - 從一開始僅有表單功能，開始慢慢增加功能到成為一個完整的系統
          - 第一版使用Express，後改版時改為用Koa
          - 串接 Google Map Api 協助申請店家選擇座標位置
          - 串接 Tapay 免跳轉信用卡支付服務
          - 串接 g0v 經濟部商業司及財政部營業稅籍開放資料，取得統一編號的相關資訊
        `,
        tag: ['Koa', 'TypeScript', 'TsLint', 'Nuxt', 'Vue', 'Element-UI', 'Vuex', 'Vue i18n', 'Tappay SDK', 'GraphQL', 'Apollo GraphQL', 'Vue Apollo', 'Google Map Api', 'Scss'],
      },
      {
        title: 'RE紅包官方網站',
        description: `
          ### RE紅包對外宣傳的主要網站，除了介紹RE紅包、媒體消息外還有線上表單供店家聯絡我們以及使用者推薦店家。
          - 只要由網頁設計師切版
          - 與後端合作開發建置
          - 將原先Express+靜態Html的官方網站改版成 Nuxt (universal)
          - 使用vue-i18n完成多語系需求
        `,
        tag: ['Express', 'TypeScript', 'TsLint', 'Nuxt', 'Vue', 'Vuex', 'Vue-i18n', 'LRU Cache', 'Scss'],
      },
    ],
  },
  {
    companyName: '接案',
    projects: [
      {
        title: '格上租車小遊戲',
        description: `
          - 與後端合作開發建置
          - 串接格上租車會員資料
          - 用Pixi.js完成兩個小遊戲
            - 射擊遊戲
            - 接東西遊戲
        `,
        tag: ['Express', 'TypeScript', 'jQuery', 'Vue', 'Element-ui', 'Pixi.js', 'Scss', 'webpack'],
      },
      {
        title: '統一時代百貨台北店官方網站',
        description: `
          - 與後端合作維護專案
          - 線上美食
            - 餐廳訂位：串接時代百貨 inline.app 餐廳雲端管理系統的櫃位資料 (連結導向inline.app線上訂位)
            - 餐點外送：串接時代百貨 honestbee 的櫃位資料 (連結導向honestbee線上訂餐)
              - 因 honestbee 暫停營運已經拿掉
        `,
        tag: ['.NET MVC', 'jQuery', 'Vue', 'Scss'],
      },
      {
        title: '晴鉐設計官方網站',
        description: `
          - 與後端合作開發建置
        `,
        tag: ['.NET MVC', 'jQuery', 'Vue ', 'Scss'],
      },
      {
        title: 'Hyundai好行 App',
        description: `
          - 目前後該App已重新改版過
          - 與後端合作開發建置
          - Hybrid App 負責其中幾個Web頁面
            - 登入、預約保養的表單頁面
            - 保養紀錄、道路救援資訊頁面
        `,
        tag: ['.NET MVC', 'jQuery', 'Vue', 'Scss'],
      },
    ],
  },
  {
    companyName: '蝦米智慧媒體股份有限公司',
    projects: [
      {
        title: 'GlobalMall 環球購物中心官方網站',
        description: `
          - 離職後該網站已重新改版過
          - 與後端合作開發建置
          - 串接SOAP環球購物會員資料(鼎新系統)
        `,
        tag: ['.NET MVC', 'jQuery', 'Vue', 'Scss'],
      },
      {
        title: '麗寶OUTLET MALL官方網站',
        description: `
          - 與後端合作開發建置以及維護
        `,
        tag: ['.NET MVC', 'jQuery', 'Scss'],
      },
      {
        title: 'Kia Life+ App',
        description: `
          - 離職後該App已重新改版過
          - 與後端合作開發建置
          - Hybrid App 負責其中幾個Web頁面
            - App開啟進入主頁前的小動畫
            - 註冊、登入、預約保養的表單頁面
            - 拉霸活動頁面
              - 串接3QMF好朋友雲端贈品平台API，寄送獎品序號簡訊給會員
        `,
        tag: ['jQuery', 'Vue', 'Scss'],
      },
      {
        title: '寶島眼鏡 EYE-CATCH 會員服務網站、寶島眼鏡 Eye-Family 會員服務網站',
        description: `
          - 與後端合作開發建置以及維護
          - EYE-CATCH為原有舊網站設計不變重新建置
          - 串接寶島眼鏡會員資料API
          - 首次嘗試在專案中導入Vue.js
        `,
        tag: ['.NET MVC', 'jQuery', 'Vue 1.x', 'Scss'],
      },
      {
        title: '南山人壽活動網頁 - 天外祈ㄐ',
        description: `
          - 與後端合作開發建置
          - 使用 Facebook OAuth2.0 進行登入參與活動
            - 搜集參加活動者的基本資料並供活動結束後抽獎使用
        `,
        tag: ['jQuery', 'Scss'],
      },
      {
        title: '林口三井 OUTLET Food Court電子看板內容',
        description: `
          - 電子看板輪播內容的其中一頁
            - 近2、3小時內桃園機場入境出境時間表與當地天氣狀況
          - 串接桃園機場航班資訊
          - 串接AccuWeather天氣資訊API
        `,
        tag: ['PHP', 'jQuery', 'Scss'],
      },
      {
        title: '勝悅髮型｜群悅美妍健體養護館官方網站',
        description: `
          - 與後端合作開發建置以及維護
          - 首頁影片串接YouTube Api取得客戶的YouTube播放清單
          - 使用 Facebook、Google OAuth2.0 進行會員第三方登入
          - 使用 FullCalendar.js 完成線上預約功能
          - 串接遠傳mPush API簡訊服務
        `,
        tag: ['.NET MVC', 'jQuery', 'Facebook SDK', 'Google Sign-In SDK', 'FullCalendar.js', 'Scss'],
      },
    ],
  },
];

const work: Module<any, any> = {
  namespaced: true,
  state: {
    works,
  },
};

export default work;
