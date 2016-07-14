 .
 <template lang="html">
  <match></match>
  <br>
  <button class="ui red basic button" @click="match()" v-bind:class="{ 'disable': !activeBtnMatch }" >Matching Name</button>
  <br><br>

  <div class="ui equal width center aligned padded grid">
    <div class="row">
      <div class="column">
        <h3>ผู้พิการ</h3>
        <table class="ui green table">
        <thead>
          <tr>
            <tr><th>ชื่อ</th>
            <th>นามสกุล</th>
            <th>อายุ</th>
            <th>ระยะทาง</th>
        </tr>
      </thead>
        <tbody v-for="(key, show) in querydis | filterBy 'unactive' in 'mem_status' | filterBy 'active' in 'mem_pay' ">
          <tr v-bind:class="{ 'actives': active1 === $index && test1 }" @click="check1($index, show)">
            <td>{{show.mem_name}}</td>
            <td>{{show.mem_surname}}</td>
            <td>{{show.mem_age}}</td>
            <td>{{show.mem_distance}}</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="column">
        <h3>อาสาสมัคร</h3>
        <table class="ui blue table">
        <thead>
          <tr><th>ชื่อ</th>
          <th>นามสกุล</th>
          <th>อายุ</th>
          <th>ระยะทาง</th>
        </tr>
      </thead>
        <tbody v-for="show in queryrun | filterBy 'unactive' in 'mem_status' | filterBy 'active' in 'mem_pay'">
          <tr v-bind:class="{ 'actives': active2 === $index && test2}" @click="check2($index, show)">
            <!-- <td>{{show.mem_id}}</td> -->
            <td>{{show.mem_name}}</td>
            <td>{{show.mem_surname}}</td>
            <td>{{show.mem_age}}</td>
            <td>{{show.mem_distance}}</td>
          </tr>
        </tbody>
      </table>
      </table>
      </div>
  </div>
</template>

<script>
import Match from './match.vue'
export default {
  data: function () {
    return {
      querydis: [],
      queryrun: [],
      active1: '',
      active2: '',
      test1: true,
      test2: true,
      data1: '',
      data2: '',
      activeBtnMatch: false,
      dataID1: '',
      dataID2: ''
    }
  },
  computed: {},
  ready: function () {
    this.$http.get('http://192.168.100.113:10000/members/disabled').then(function (res) {
      this.querydis = res.data
    })
    this.$http.get('http://192.168.100.113:10000/members/normal').then(function (res) {
      this.queryrun = res.data
    })
  },
  attached: function () {},
  methods: {
    check1: function (index, show) {
      if (this.active1 === index) {
        this.test1 = !this.test1
        this.dataID1 = ''
        this.activeBtnMatch = false
        console.log('ไม่เอา' + this.dataID1)
      } else {
        this.test1 = true
        this.dataID1 = show.mem_id
        this.activeBtnMatch = true
        console.log('เอา' + this.dataID1)
      }
      this.active1 = index
    },
    check2: function (index, show) {
      if (this.active2 === index) {
        this.test2 = !this.test2
        this.dataID2 = ''
        this.activeBtnMatch = false
        console.log('ไม่เอา' + this.dataID2)
      } else {
        this.test2 = true
        this.dataID2 = show.mem_id
        console.log('เอา' + this.dataID2)
        this.activeBtnMatch = true
      }
      this.active2 = index
    },
    match: function () {
      // function send (parameter)
      // console.log(this.dataID1, this.dataID2)
      var setData = {
        mem_id: this.dataID1,
        join_event: this.dataID2,
        event_id: 1
      }
      console.log(setData)
      this.$http.post('http://192.168.100.113:10000/request', setData).then(function (res) {
        console.log(res)
        this.get()
      })
    },
    get: function () {
      this.$http.get('http://192.168.100.113:10000/members/normal').then(function (res) {
        this.queryrun = res.data
      })
      this.$http.get('http://192.168.100.113:10000/members/disabled').then(function (res) {
        this.querydis = res.data
      })
    }
  },
  components: {
    Match
  }
}
</script>

<style lang="css">
.actives {
  background-color: yellow;
}
.disable {
  pointer-events: none;
}
</style>
