import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
      count: 0,
      selected: 'profile',
      user: {
        id: '',
        username: ''
      },
      resume: {
        config: [
          {field: 'profile', icon: 'id'},
          {field: 'workHistory', icon: 'work'},
          {field: 'education', icon: 'book'},
          {field: 'projects', icon: 'heart'},
          {field: 'awards', icon: 'cup'},
          {field: 'contacts', icon: 'phone'}
        ],
        profile: {
          name: '邵志远',
          city: '金华',
          title: '首席少赚',
          birthday: '1995-3-13'
        },
        workHistory: [
          {company: '公司', content: '我的第二份工作是'},
        ],
        education: [
          {school: '河南城建学院', content: '文字'},
        ],
        projects: [
          {name: 'project A', content: '文字'},
        ],
        awards: [
          {name: '再来10瓶', content: '连续获得10次再来一瓶'},
        ],
        contacts: [
          {contact: 'phone', content: '13812345678'},
        ]
      }
  },
  mutations: {
    initState(state,payload){
      this.$set(state,payload)
      console.log(state)
    },
    switchTab(state,payload) {
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state,{path,value}){
      objectPath.set(state.resume,path,value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state,payload){
      Object.assign(state.user,payload)
      console.log(state.user)
    },
    removeUser(state){
      console.log("登出")
      state.user.id = ''
    },
    append(state,payload){
      let newInput = {
        name: "",
        content: ''
      }
      payload.field.push(newInput)
    }
  }
})
