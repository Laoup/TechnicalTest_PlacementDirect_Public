<template>
  <div class="dashboard">
    <Splashscreen
      static_title="Bonjour"
      :dynamic_title=" this.getFirstName"
    />
    <AssuranceMenuOfUser />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Splashscreen from '@/components/Splashscreen.vue'
import AssuranceMenuOfUser from '@/components/AssuranceMenuOfUser.vue'

export default {
  name: 'Dashboard',
  components: {
    Splashscreen,
    AssuranceMenuOfUser
  },
  computed: {
    ...mapGetters([
      'getFirstName',
      'getLastName',
    ])
  }
}
</script>

<style scoped lang="scss">
</style>
