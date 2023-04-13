import game from '@/api/game'
import {getGameInfo, reqGameTypeList} from '@/api/game'

const state = {
    videoInfo: {}
}
const mutations = {
    VIDEOINFO(state, videoInfo) {
        state.videoInfo = videoInfo
    }
}
const actions = {
    async videoInfo({commit}, id) {
        let result = await videoInfo(id)
        if (result.code === 200) {
            commit("VIDEOINFO", result.data.videoInfo)
        }
    }
}
const getters = {
    videoInfo(state) {
        return state.videoInfo || {};
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
