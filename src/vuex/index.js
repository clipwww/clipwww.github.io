import Vue from 'vue'
import Vuex from 'vuex'
import common from '../assets/JS/common'
import resumeData from '../assets/js/resumeData'

const state = {
    resumeData: resumeData,
    get_access_token_url: common.addQueryString("https://graph.facebook.com/oauth/access_token", {
        "client_id": 1790670677923951,
        "client_secret": "b4ca829881e29e54da8024928dcf6b53",
        "grant_type": "client_credentials"
    }),
    access_token: "",
    fb_api_url: "https://graph.facebook.com/",
    myFbInfo: {
        id: 0,
        name: "",
        picture: {
            data: {
                url: ""
            }
        }
    },
}

const getters = {
    GetResumeData: state => state.resumeData,
    GetFbAccessTokenUrl: state => state.get_access_token_url,
    GetAccessToken: state => state.access_token,
    GetFbApiUrl: state => state.fb_api_url,
    GetMyFbInfo: state => state.myFbInfo
}

const actions = {
    UpdateMyFbInfo({ commit }, data) {
        commit("SetFbInfo", data)
    },
    UpdateAccessToken({ commit }, token) {
        commit("SetAccessToken", token)
    }
}

const mutations = {
    SetAccessToken(state, data) {
        state.access_token = data;
    },
    SetFbInfo(state, data) {
        state.myFbInfo = data;
    }
}

Vue.use(Vuex);

export default new Vuex.Store({
    // root
    state,
    actions,
    mutations,
    getters,
    modules: {

    },
    // 嚴格模式，禁止直接修改 state
    strict: true
});