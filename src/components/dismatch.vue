<template lang="html">
  <match></match>
  <showdis></showdis>
</template>

<script>
import Match from './match.vue'
import Showdis from './showdis.vue'
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
    }
  },
  computed: {},
  ready: function () {
    this.setPage(4)
  },
  attached: function () {},
  methods: {},
  components: {
    Match,
    Showdis
  }
}
</script>

<style lang="css">
</style>
