<template lang="html">
  <table class="ui fixed single line celled table">
    <thead>
      <tr>
        <th><center>seq</th>
        <th><center>ชื่อ</th>
        <th><center>นามสกุล</th>
        <th><center>เบอร์</th>
        <th><center>อายุ</th>
        <th><center>ระยะทาง</th>
        <th><center>รายละเอียด</th>
      </tr>
      <tr>
        <thead v-for="show in data | filterBy 'unactive' in 'mem_status'">
          <tr>
          <th>{{show.mem_id}}</th>
          <td>{{show.mem_name}}</td>
          <td>{{show.mem_surname}}</td>
          <td>{{show.mem_tel}}</td>
          <td>{{show.mem_age}}</td>
          <td>{{show.mem_distance}}</th>
          <td>{{show.mem_discription}}</td>
      </tr>
    </thead>
  </table>
</template>

<script>
export default {
  data: function () {
    return {
      data: []
    }
  },
  computed: {},
  ready: function () {
    this.$http.get('http://192.168.100.113:10000/members/disabled').then(function (res) {
      this.data = res.data
      console.log('load getquery')
    })
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
