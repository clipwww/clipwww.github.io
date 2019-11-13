import { Module } from 'vuex';

import { WorkVM } from '@/view-models/work.vm';

const works: WorkVM[] = [
  {
    companyName: '香港商阿爾伊股份有限公司台灣分公司',
    projects: [],
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
        tag: ['.NET MVC', 'jQuery', 'Vue.js 2.x', 'Scss'],
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
          - Hybrid App 負責其中幾個Web頁面
            - App開啟進入主頁前的小動畫
            - 註冊、登入、預約保養的表單頁面
            - 拉霸活動頁面
              - 串接3QMF好朋友雲端贈品平台API，寄送獎品序號簡訊給會員
        `,
        tag: ['jQuery', 'Vue.js 2.x', 'Scss'],
      },
      {
        title: '寶島眼鏡 EYE-CATCH 會員服務網站、寶島眼鏡 Eye-Family 會員服務網站',
        description: `
          - 與後端合作開發建置以及維護
          - EYE-CATCH為原有舊網站設計不變重新建置
          - 串接寶島眼鏡會員資料API
          - 首次嘗試在專案中導入Vue.js
        `,
        tag: ['.NET MVC', 'jQuery', 'Vue.js 1.x', 'Scss'],
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
        title: '統一時代百貨台北店官方網站',
        description: `
          - 接手與後端合作維護專案
          - 離職後還有以外包形式完成新需求「線上美食」
            - 餐廳訂位：串接時代百貨 inline.app 餐廳雲端管理系統的櫃位資料 (連結導向inline.app線上訂位)
            - 餐點外送：串接時代百貨 honestbee 的櫃位資料 (連結導向honestbee線上訂餐)
              - 因 honestbee 暫停營運已經拿掉
        `,
        tag: ['.NET MVC', 'jQuery', 'Vue.js', 'Scss'],
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
