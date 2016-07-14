<template lang="html">
  <br><br>
  <!-- <insert></insert> -->
  <h4 class='ui dividing header'>หน้ากรอกข้อมูล(คนพิการ)</h4>
  <div class="ui grid">
    <div class="four wide column">
      <div class="ui vertical fluid tabular menu">
        <a class="active item" v-link="{ path: '/runner' }">อาสาสมัคร</a>
        <a class="item" v-link="{ path: '/disabled' }">คนพิการ</a>
      </div>
    </div>

    <div class="twelve wide stretched column">
      <div class="ui segment">
        <div class='ui container'>
          <div class='ui form'>
            <div class='field'>
              <label>โครงการ</label>
              <select class='ui fluid dropdown' v-model='input.event'>
                <option v-for= "show in data" :value="show.event_id">{{show.event_name}}</option>
              </select>
            </div>
            <div class='field'>
              <label>gender</label>
              <select class='ui fluid dropdown' v-model='input.gender'>
                <option value='m'>male</option>
                <option value='f'>female</option>
              </select>
            </div>
            <div class='field'>
              <label>First Name</label>
              <input type='text'placeholder='First Name' v-model='input.name'>
            </div>
            <div class='field'>
              <label>Last Name</label>
              <input type='text' placeholder='Last Name' v-model='input.surname'>
            </div>
            <div class='field'>
              <label>Age</label>
              <input type='number'placeholder='Age' v-model='input.age'>
            </div>
            <div class='field'>
              <label>email</label>
              <input type='email'placeholder='email' v-model='input.email'>
            </div>
            <div class='field'>
              <label>tel</label>
              <input type='text'placeholder='tel' v-model='input.tel'>
            </div>
            <div class='field'>
              <label>Date</label>
              <input type='date'placeholder='tel' v-model='input.date'>
            </div>
            <div class='field'>
              <label>distance_runner</label>
              <input type='number'placeholder='distance_runner' v-model='input.distance_runner'>
            </div>
              <div class='ui form'>
                <div class='field'>
                  <label>description</label>
                  <textarea v-model='input.description'></textarea>
                </div>
            <button class='ui button' type='submit' v-on:click='add(input)'>Submit</button>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import Insert from './insert.vue'
export default {
  data: function () {
    return {
      input: {},
      data: []
    }
  },
  computed: {},
  ready: function () {
    this.$http.get('http://192.168.100.113:10000/event').then(function (res) {
      this.data = res.data
    })
    this.setPage(4)
  },
  attached: function () {},
  methods: {
    add: function (input) {
      // var setData = {
      //   mem_name: input.name,
      //   mem_surname: input.surname,
      //   mem_gender: input.gender,
      //   mem_age: input.age,
      //   mem_email: input.email,
      //   mem_tel: input.tel,
      //   mem_date: input.date,
      //   mem_distance: input.distance_runner,
      //   mem_pic: '',
      //   mem_discription: input.description,
      //   group_id: 2,
      //   mem_type: 'disabled',
      //   mem_status: 'unactive',
      //   mem_pay: 'null'
      // }
      var setData = {
        mem_name: 'นางสงกรานต์',
        mem_surname: 'ทำงานเเล้วทน',
        mem_gender: 'm',
        mem_age: '56',
        mem_email: 'vo@gmail.com',
        mem_tel: '041234564',
        mem_date: '2016-06-05T17:00:00.000Z',
        mem_pic: '',
        mem_discription: 'พิการ',
        mem_type: 'disabled',
        event_id: input.event
      }
      this.$http.post('http://192.168.100.113:10000/members', setData).then(function (res) {
        console.log(res)
      })
    }
  },
  components: {
    Insert
  }
}
</script>

<style lang="css">
</style>
