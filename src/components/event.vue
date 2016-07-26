<template lang="html">
  <br><br><br>
  <!-- menu -->
    <div class="ui right aligned grid">
       <div class="left floated right aligned two wide column">
          <button class="ui green button" @click="modal(input)">+ สร้าง</button>
       </div>
       <div class="left aligned one wide column">
          <center><button class="ui button" @click="changePage('one')"><i class="content icon"></i></button>
        </div>
        <div class="left aligned one wide column">
          <center><button class="ui button" @click="changePage('two')"><i class="list icon"></i></button>
        </div>
     </div>
     <br>

<!-- _showdata -->
<div v-show="activePage1 === true">
      <table class="ui orange table">
      <thead>
        <tr><th><center>ชื่อโครงการ</th>
        <th><center>สถานที่จัดการวิ่ง</th>
        <th><center>วันที่จัดงาน</th>
        <th><center>Detail</th>
        <th><center>Edit</th>
        <th><center>Delete</th>
        <th><center>ดูข้อมูล</center></th>
      </tr>
      </thead>
      <tbody class="silde ui">
        <tr v-for="show in data">
            <td><center>{{show.event_name}}</td>
            <!-- <td><center>{{ show.event_date_start | moment 'calendar' }}</td> -->
            <td><center>{{show.event_location}}</td>
            <td>{{show.event_date_start | moment 'dddd, MMMM Do YYYY, h:mm:ss a' }}</td>
            <td><center><i class="zoom icon" @click="detail($index)"></i></td>
            <td><center><i class="edit icon" @click="updateEvent($index)"></i></td>
            <td><center><i class="remove icon" @click="delEvent(show.event_id)"></i></td>
            <td><center><i class="list layout icon" @click="showEvent(show.event_id)"></i></td>
        </tr>
      </tbody>
    </table>
  </div>

<!-- showdata_page2 -->
<div v-show="activePage2 === true">
   <center>
     <div class="ui one column doubling stackable grid container">
       <div class="column">
          <div class="ui cards">
            <div class="card" v-for="show in data">
              <div class="content">
                  <div class="header">{{show.event_name}}</div>
                  <div class="meta">{{show.event_date}}</div>
                  <div class="description">{{show.event_location}}</div>
             </div>
            <div class="extra content">
                <div class="ui two buttons">
                  <div class="ui basic green button" @click="updateEvent($index)">แก้ไข</div>
                  <div class="ui basic red button" @click="delEvent(show.event_id)">ลบ</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
   </center>
</div>


<!-- modal -->
<div class="ui modal 1">
  <i class="close icon"></i>
  <div class="header">
    จัดการเเข่งขัน
  </div>
  <div class="image content">
    <div class="ui medium image"><img src="../../static/logo.png"></div>
    <div class="description">
      <div class="ui header">จัดการสร้างการเเข่งขัน
      <p>สร้าง event เเละการเเข่งขัน  ข้อมูลสามารถว่างได้ถ้าไม่ต้องการให้มีในระบบ</p></div>
      <form class="ui form">
      <div class='field'>
        <label>การจัดการชื่อโครงการ</label>
        <input type="text" placeholder="การจัดการชื่อโครงการ" v-model="input.name"> <br>
        <label>สถานที่จัด</label>
        <textarea placeholder="สถานที่จัด" v-model="input.location"></textarea>
      </div>
        <div class="field">
          <label>วันที่เริ่มสมัคร</label>
          <input type="date" placeholder="วันที่เริ่มสมัคร" v-model="input.date_start">
        </div>
        <div class="field">
          <label>วันที่ปิดสมัคร</label>
          <input type="date" placeholder="วันที่ปิดสมัคร" v-model="input.date_end">
        </div>
        <div class="field">
          <label>วันที่จัดการเเข้งขัน</label>
          <input type="date" placeholder="วันที่จัดการเเข้งขัน" v-model="input.date">
        </div>
        <div class="field">
          <label>กำหนดค่าสมัคร/ระยะทาง</label>
        </div>
        <div class="field">
          <input type="number" placeholder="เงิน" v-model="input.money">
          <input type="number" placeholder="ระยะทาง" v-model="input.distance">
        </div>
      </form>
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">ยกเลิก</div>
    <div class="ui positive right labeled icon button" @click="add(input)">ตกลง<i class="checkmark icon"></i>
    </div>
  </div>

  <!-- modal-detail -->
  <div class="ui modal 2">
  <i class="close icon"></i>
   <div class="header">{{dataDetail.event_name}}</div>
   <div class="image content">
    <!-- <div class="ui medium image"><img src="/images/avatar/large/chris.jpg"></div> -->
    <div class="description">
      <div class="ui header">{{dataDetail.event_name}}</div>
      <p>สถานที่จัดงาน {{dataDetail.event_location}}</p>
      <p>{{dataDetail.event_date_open}}</p>
      <p>{{dataDetail.event_date_close}}</p>
      <div v-for="show in dataDetail.event_distance"><p>{{show}}</p></div>
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">แก้ไข</div>
    <div class="ui positive right labeled icon button">ปืดรายละเอียด<i class="checkmark icon"></i></div>
  </div>
</div>

<!-- modal-edit -->
<div class="ui modal 3">
<i class="close icon"></i>
 <div class="header">แก้ไขการจัดการ event</div>
 <div class="image content">
   <div class="ui medium image"><img src="../../static/logo.png"></div>
   <div class="description">
     <div class="ui header">จัดการสร้างการเเข่งขัน (แก้ไขการจัดการ)
     <p>สร้าง event เเละการเเข่งขัน  ข้อมูลสามารถว่างได้ถ้าไม่ต้องการให้มีในระบบ</p></div>
     <form class="ui form">
     <div class='field'>
       <label>การจัดการชื่อโครงการ</label>
       <input type="text" placeholder="การจัดการชื่อโครงการ" v-model="input.name" :value="dataEdit.event_name"> <br>
       <label>สถานที่จัด</label>
       <textarea placeholder="สถานที่จัด" v-model="input.location" :value="dataEdit.event_location"></textarea>
     </div>
       <div class="field">
         <label>วันที่เริ่มสมัคร</label>
         <input type="date" placeholder="วันที่เริ่มสมัคร" v-model="input.date_start" :value="dataEdit.event_date_open">
       </div>
       <div class="field">
         <label>วันที่ปิดสมัคร</label>
         <input type="date" placeholder="วันที่ปิดสมัคร" v-model="input.date_end" :value="dataEdit.event_date_close">
       </div>
       <div class="field">
         <label>วันที่จัดการเเข้งขัน</label>
         <input type="date" placeholder="วันที่จัดการเเข้งขัน" v-model="input.date" :value="dataEdit.event_date_start">
       </div>
       <div class="field">
         <label>กำหนดค่าสมัคร/ระยะทาง</label>
       </div>
       <div class="field">
         <input type="number" placeholder="เงิน" v-model="input.money">
         <input type="number" placeholder="ระยะทาง" v-model="input.distance">
       </div>
     </form>
</div>


<div class="ui basic modal load">
  <div class="ui teal progress" id="example2">
    <div class="bar"></div>
    <div class="label">loading {{percent.count}} ...%</div>
  </div>
</div>


</template>
<script>
/*globals $:false */
import store from '../vuex/store.js'
import {stateAction, getApi, eventID} from '../vuex/actions.js'
import {getBackend, getState, getsearchEvent} from '../vuex/getters.js'
export default {
  store,
  vuex: {
    actions: {
      setPage: stateAction,
      getApis: getApi,
      getEvent: eventID
    },
    getters: {
      getApiEvent: getBackend,
      getState: getState,
      showEventID: getsearchEvent
    }
  },
  data: function () {
    return {
      input: {},
      data: [],
      activePage1: true,
      activePage2: false,
      dataDetail: {},
      dataEdit: {},
      percent: {},
      eventID: 0
    }
  },
  computed: {},
  ready: function () {
    this.$http.get('http://192.168.100.100:10000/event').then(function (res) {
      // console.log(res)
      this.data = res.data
    })
    this.setPage(1)
    this.getApis()
    console.log(this.getApiEvent)
    // this.data = this.getApiEvent
    console.log('show data state :' + this.getState)
  },
  attached: function () {},
  methods: {
    get: function () {
      this.$http.get('http://192.168.100.100:10000/event').then(function (res) {
        console.log(res)
        this.data = res.data
      })
    },
    add: function (input) {
      var data = {
        event_name: 'วิ่งด้วยกัน ครั้้งที่ 2',
        event_date: input.date,
        event_location: 'Pracha Rat Sai 1 Rd, แขวง วงศ์สว่าง เขต บางซื่อ กรุงเทพมหานคร 10800',
        event_distance: '3,8,10',
        event_price: '200,300,400'
      }
      console.log(data)
      this.$http.post('http://192.168.100.100:10000/event', data).then(function (res) {
        console.log(res)
        this.get()
      })
    },
    modal: function (input) {
      console.log(input)
      $('.ui.modal.1').modal('show')
    },
    delEvent: function (id) {
      console.log(id)
      this.$http.delete('http://192.168.100.100:10000/event' + id).then(function (res) {
        console.log(res)
        this.get()
      })
    },
    updateEvent: function (id) {
      console.log(id)
      this.dataEdit = this.data[id]
      console.log('show' + this.dataEdit)
      $('.ui.modal.3').modal('show')
    },
    changePage: function (page) {
      if (page === 'one') {
        this.activePage1 = true
        this.activePage2 = false
      } else {
        this.activePage1 = false
        this.activePage2 = true
      }
    },
    detail: function (index) {
      console.log(this.data[index])
      this.dataDetail = this.data[index]
      $('.ui.modal.2').modal('show')
    },
    showEvent: function (eventID) {
      console.log(eventID)
      this.getEvent(eventID)
      console.log('show eventid vuex' + this.showEventID)
      this.eventID = eventID
      var percent = 0
      this.percent = {
        count: 0
      }
      $('.ui.basic.modal.load').modal('show')
      var loading = setInterval(() => {
        percent += 20
        this.percent = {
          count: percent
        }
        $('#example2').progress({
          percent: percent
        })
        if (percent === 100) {
          this.$route.router.go({path: '/dragmatch'})
          this.percent.count = 0
          percent = 0
          $('.ui.basic.modal.load').modal('hide')
          clearInterval(loading)
        }
      }, 1000)
    }
  },
  components: {}
}
</script>

<style lang="css">
.silde{
  width:100%;
  height: 300px;
  overflow: scroll;
}
</style>
