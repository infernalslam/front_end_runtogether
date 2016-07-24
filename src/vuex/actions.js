import Vue from 'vue'

export const stateAction = function ({ dispatch, state }, page) {
  dispatch('statePage', page)
}
// api connection
export const getApi = ({ dispatch, state }) => {
  // var dataevent = []
  Vue.http.get('http://192.168.1.39:10000/event').then((res) => {
    // dataevent = res.data
    // console.log('dataevent' + dataevent)
    console.log('res.data' + res.data)
    dispatch('getStatePage', res.data)
  })
}

export const eventID = ({dispatch, state}, idEvent) => {
  dispatch('searchEvent', idEvent)
}
