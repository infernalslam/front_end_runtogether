<template lang="html">
<br><br><br>
<table class="ui fixed single line table">
  <thead>
    <tr>
      <th><center>คู่</th>
      <th><center>ชื่อ นามสกุล(คนพิการ)</th>
      <th><center>ชื่อ นามสกุล (อาสาสมัคร)</th>
    </tr>
  </thead>
  <thead v-for="show in data">
    <tr><th><center>{{show.mem_id}}</th>
    <td>{{show.name_disabled}} &nbsp; {{show.surname_disabled}}</td>
    <td>{{show.name_normal}} &nbsp; {{show.surname_normal}}</td>
  </tr></thead>
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
    this.$http.get('http://192.168.100.113:10000/request').then(function (res) {
      console.log(res.data)
      this.data = res.data
    })
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
