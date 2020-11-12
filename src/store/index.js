// vuex 最核心的管理对象 store

// Redux
// 核心对象：store
// 数据存储：state
// 状态更新提交接口：dispatch
// 状态更新提交参数：带type和payload的Action
// 状态更新计算：reducer
// 限制：reducer必须是纯函数，不支持异步
// 特性：支持中间件

// VUEX
// 核心对象：store
// 数据存储：state
// 状态更新提交接口：commit
// 状态更新提交参数：带type和payload的mutation提交对象/参数
// 状态更新计算：mutation handler
// 限制：mutation handler必须是非异步方法
// 特性：支持带缓存的getter，用于获取state经过某些计算后的值

import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

