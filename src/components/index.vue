<template lang="html">
  <div>
    <div class="ui container">
        <div class="ui top fixed hidden menu">
         <div class="ui container">
           <div class="left menu">
              <img src="../../static/logo.png" height="40px"/>
           </div>
           <a class="item" v-link="{ path: '/event' }" :class="{'active': state === 1}">จัดงาน/การเเข่งขัน</a>
           <a class="item" v-link="{ path: '/show' }" :class="{'active': state === 2}">รายชื่อคนสมัคร</a>
           <a class="item" v-link="{ path: '/runner' }" :class="{'active': state === 3}">แก้ไขข้อมูล</a>
             <a class="item" v-link="{path: '/dismatch'}" :class="{'active': state === 4}">จับคู่คนสมัคร</a>
             <a class="item" v-link="{ path: '/check' }" :class="{'active': state === 5}">ตรวจสอบสถานะ</a>
             <div class="right menu">
               <div class="item">
                 <a class="ui primary button" v-link="{ path: '/register' }">ชำระเงิน</a>
               </div>
           </div>
         </div>
       </div>
     </div>
    <div class="ui container">
     <router-view></router-view>
   </div>
  </div>
</template>

<script>
import {getState} from '../vuex/getters.js'
import store from '../vuex/store.js'
import {stateAction} from '../vuex/actions.js'
export default {
  store,
  vuex: {
    getters: {
      state: getState
    },
    actions: {
      setPage: stateAction
    }
  },
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {
    this.setPage(1)
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
