import Vue from 'vue'
import Vuex from 'vuex'
import common from '../assets/JS/common'
import secretData from '../assets/js/secretData'
import resumeData from '../assets/js/resumeData'

const state = {
    resumeData: resumeData,
    get_access_token_url: common.addQueryString("https://graph.facebook.com/oauth/access_token", {
        "client_id": secretData.fbParam.client_id,
        "client_secret": secretData.fbParam.client_secret,
        "grant_type": "client_credentials"
    }),
    access_token: "",
    fb_api_url: "https://graph.facebook.com/",
    myFbInfo: {
        id: 0,
        name: "",
        picture: {
            data: {
                url: "" //http://clipwww.github.io/MetroResume/image/983902.jpg
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