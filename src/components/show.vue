<template lang="html">
  <br><br><br>
  <div class="ui category search  segment heads">
    <button class="ui  blue button">(คนพิการ)</button>
    <button class="ui  black button">(อาสาสมัคร)</button>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <div class="ui icon input">
      <input class="prompt" type="text" placeholder="Search ...">
      <i class="search icon"></i>
    </div>
    <div class="results"></div>
  </div>

  <table class="ui blue fixed single line table" class="scroll">
    <thead>
      <tr>
        <th><center>ชื่อ</th>
        <th><center>นามสกุล</th>
        <th><center>เพศ</th>
        <th><center>เบอร์</th>
        <th><center>อายุ</th>
        <th><center>สถานะ</th>
        <th><center>แก้ไข</th>
      </tr>
    </thead>
    <tbody v-for="show in data">
      <tr>
      <td><center>{{show.mem_name}}</td>
      <td><center>{{show.mem_surname}}</td>
      <td><center>{{gender(show.mem_gender)}}</td>
      <td><center>{{show.mem_tel}}</td>
      <td><center>{{show.mem_age}}</th>
      <td><center>{{show.mem_email}}</td>
      <td><center><i class="trash outline icon" v-on:click="del(show.mem_id, $index)"></i></td>
    </tr></tbody>
</table>
</template>

<script>
import store from '../vuex/store.js'
import {stateAction} from '../vuex/actions.js'
export default {
  store,
  vuex: {
    actions: {
      setPage: stateAction
    }
  },
  data: function () {
    return {
      data: []
    }
  },
  computed: {},
  ready: function () {
    this.$http.get('http://192.168.100.113:10000/members').then(function (res) {
      console.log(res.data)
      this.data = res.data
    })
    this.setPage(2)
  },
  attached: function () {},
  methods: {
    del: function (id, index) {
      console.log(id, index)
      this.$http.delete('http://192.168.100.113:10000/members/' + id).then(function (res) {
        console.log(res)
        this.get()
      })
    },
    get: function () {
      this.$http.get('http://192.168.100.113:10000/members').then(function (res) {
        console.log(res)
        this.data = res.data
      })
    },
    gender: function (data) {
      if (data === 'm') {
        return 'ชาย'
      } else return 'หญิง'
    }
  },
  components: {}
}
</script>

<style lang="css">
.heads {
    position: relative;
    background: rgb(252, 162, 30) !important;
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
    margin: 1rem 0;
    padding: 1em;
    border-radius: .28571429rem;
    border: 1px solid rgba(34,36,38,.15);
}
.scroll {
    background-color: #00FFFF;
    width: 100px;
    height: 100px;
    overflow: scroll;
}
</style>
