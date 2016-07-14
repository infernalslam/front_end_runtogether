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
        <thead v-for="show in data">
          <tr>
            <!-- mem_id_num: "1730600113916",
            mem_name: "วิโรจน์",
            mem_surname: "กาสาวพัทธ์",
            mem_nickname: "ดม",
            mem_gender: "m",
            mem_age: "23",
            mem_email: "test-slam@hotmail.com",
            mem_tel: "029110020",
            mem_date: "2016-06-04T17:00:00.000Z",
            mem_pic: "xxxx",
            mem_discription: "อยากวิ่งเล่น",
            mem_department: "",
            mem_type: "disabled",
            mem_disabled_type: "" -->
          <th>{{show.mem_id}}</th>
          <td>{{show.mem_name}}</td>
          <td>{{show.mem_surname}}</td>
          <td>{{show.mem_tel}}</td>
          <td>{{show.mem_age}}</td>
          <td>{{show.mem_distance}}</th>
          <td>{{show.mem_disabled_type}}</td>
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
    this.$http.get('http://192.168.1.38:10000/members/disabled').then(function (res) {
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
