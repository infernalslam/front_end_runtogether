<template lang="html">
  <br><br><br>
    <div class="ui container">
    <!-- <form class="ui form">
    <h4 class="ui dividing header">หน้ากรอกข้อมูล(Information)</h4>
    <div class="ui top attached tabular menu">
    <a class="item active" v-link="{ path: '/runner' }">อาสาสมัคร</a>
    <a class="item" v-link="{ path: '/disabled' }">คนพิการ</a>
  </form> -->
  <div class="ui grid">
    <div class="four wide column">
      <div class="ui vertical fluid tabular menu">
        <a class="active item" v-link="{ path: '/runner' }">อาสาสมัคร</a>
        <a class="item" v-link="{ path: '/disabled' }">คนพิการ</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
