import AES from "@/utils/aes";

export default {

  state: () => ({
    //
    /* User */
    user: {},
    login: false,
    token: localStorage.getItem('t') || '',
    userId: localStorage.getItem('u_i') || '',
    //token: '',
    //userId: '',
    gameEn: {
      key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
      iv: '1234567890123456'
    },
    // gameEnterInfo: {
    //   account:JSON.parse( localStorage.getItem('a')) || '',
    //   pass: JSON.parse(localStorage.getItem('p')) || '',
    // },

  }),

  getters: {
    USERID: state => state.userId,
    LToken: state => state.token,
    USER: state => state.user,
    GAME_ENTER_INFO: state => state.gameEnterInfo,
    Game_En: state => state.gameEn
  },

  mutations: {
    Game_Enter_Info(state, payload) {
      var acc = AES.encrypt(JSON.stringify(payload.account + ';' + 'You’ve seen how crazy I am and you still choose to be my friend. Thanks for being the realest' + ';' + 'zhong'), state.gameEn);
      var pass = AES.encrypt(JSON.stringify(payload.pass + ';' + '@#d4dgd53gtd53d6' + ';' + 'zh126575755'), state.gameEn);
      localStorage.setItem('a', acc)
      localStorage.setItem('p', pass)
      //  state.gameEnterInfo.account = payload.account
      //  state.gameEnterInfo.pass = payload.pass
    },
    Login_Info(state, payload) {
      state.userId = payload[2] // userId
      state.token = payload[4] // token
      localStorage.setItem('t', payload[4]) // token
      localStorage.setItem("u_i", payload[2])
    },
    IS_LOGIN(state, payload) {
      state.login = payload
    },
    /* User */
    User(state, payload) {
      state.user = payload
    }
  },

  actions: {
    //
  },
  namespaced: true
}
