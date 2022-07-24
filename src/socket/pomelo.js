/* eslint-disable */
import './PomeloClient.js'
import ws from './ws2'
//import global from '../utils/global'
import store from '@/store/index.js'


var nHeartBeat = 0
var s_timer
var isConn = true
var interval = null
var p_server = new Pomelo()
var p_server2 = new Pomelo()

function conn(cb) {
  let token = localStorage.getItem('t');
  let userId = store.state.user.userInfo
  //let userId = store.getters.user.userInfo
  console.log("userid", userId);
  let msg = { uid: userId[2] }
  let msg2 = { userId: msg.uid, token: token, rType: 'ty' }
  console.log("&&&&&&&", msg2);
  p_server.init(
    {
      //host: process.env.NODE_ENV == 'development' ? process.env.VUE_APP_DEV_POMELO : process.env.VUE_APP_PRO_POMELO,
      host: '45.116.165.93',
      port: 3014,
      log: true
    },

    function (num) {
      console.log(num, "data");
      p_server.request('gate.gateHandler.queryEntry', msg, res => {
        console.log(res, "queryEntry");
        p_server.disconnect()
        if (res.code == 200) {
          p_server2.init(
            {
              host: '45.116.165.93',
              //host: process.env.NODE_ENV == 'development' ? process.env.VUE_APP_DEV_POMELO : process.env.VUE_APP_PRO_POMELO,
              port: res.port,
              log: true
            },
            function (res) {
              console.log(res);
              if (res.code == 200) {
                p_server2.request('connector.entryHandler.entry', msg2, res => {
                  console.log('Connector res ', res)
                  if (res.code == 200) {
                    isConn = false
                    if (this.interval != null) {
                      clearInterval(this.interval)
                      this.interval = null
                    }
                    startTimer()
                    cb(null, res)
                  } else {
                    //localStorage.removeItem("t")
                    // window.location.reload()
                    console.log("tokennnnnnnnnnnnnnnnn");
                    //global.loginUser()
                    // window.location.reload()
                  }
                })
              }
              else { console.log('Token Expired'); }
            }
          )
        }
      })
    }
  )
}

p_server2.on('close', function (e) {
  console.log('close ', new Date())
  isConn = true
  if (this.interval != null) {
    clearInterval(this.interval)
    this.interval = null
  }
  // 连接关闭
  if (isConn) {
    // isConn = false
    console.log('enter close ................', isConn)
    this.interval = setInterval(() => {
      console.log('enter interval loop ...', isConn)
      if (isConn) {
        console.log('enter reconnect ...', isConn)
        // isConn = false
        conn(function (err, res) {
          if (res.code == 200) {
            clearInterval(interval)
            interval = null
            // isConn = true
            console.log('isConn ', isConn)
          }
        });
      }
      // isConn = true
    }, 5000)
  }
})

p_server2.on('onMsg', function (e) {
  // console.log('----onMsg------:', e)
  ws.doData(e)
})

p_server2.on('onKick', function (e) {
  // 被踢开
  //  alert('相同账号登录！')
  // Message.warning('相同账号登录！')
  kick()
})

function kick() {
  nHeartBeat = 0
  p_server2.disconnect()
  console.log("kickkkkkkkkkkkkkk");
  clearInterval(s_timer)
  // let opened = window.open('about:blank', '_self');
  // opened.opener = null;
  // opened.close();
}

var n = 0
function send(msg, cb) {
  n = n + 1
  p_server2.request(msg.route, msg.data, cb)
}

function startTimer() {
  console.log('start Timer ')
  clearInterval(s_timer)
  s_timer = setInterval(() => {
    chkHeartBeat(p_server2)
  }, 5000)
}

function chkHeartBeat(server) {
  console.log('CheckHeart |Beat', nHeartBeat)
  if (nHeartBeat > 60) {
    // console.log('自检测跳线了')
    //alert('网络状态不佳, 需重新登录!')
    server.disconnect()
    clearInterval(s_timer)
    window.location.reload()
  }
  nHeartBeat += 5
  var msg = { uid: 15491 } // 记得改
  var route = 'ty.tyHandler.chkHardBean'
  server.request(route, msg, function (data) {
    if (data.code == '07') {
      nHeartBeat = 0
    }
  })
}
export default { conn, send, kick }
