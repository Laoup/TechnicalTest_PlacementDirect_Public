<template>
  <div class="profil">
    <section>
      <DisplayUserInfo />
      <FormPatchUserInfo />
    </section>
  </div>
</template>

<script>

import DisplayUserInfo from '@/components/DisplayUserInfo.vue'
import FormPatchUserInfo from '@/components/FormPatchUserInfo.vue'

export default {
  name: 'Profil',
  components: {
    DisplayUserInfo,
    FormPatchUserInfo
  }
}
</script>

<style scoped lang="scss">
.profil {
  background-color: black;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
}
</style>
