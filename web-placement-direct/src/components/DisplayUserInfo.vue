<template>
  <article class="display-user-info">
    <div>
      <p><span>Votre nom:</span></p>
      <p>{{ getLastName }}</p>
    </div>

    <div>
      <p><span>Votre prénom:</span></p>
      <p>{{ getFirstName }}</p>
    </div>

    <div>
      <p><span>Votre email:</span></p>
      <p>{{ getEmail }}</p>
    </div>
  </article>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'DisplayUserInfo',
  computed: {
    ...mapGetters([
      'getFirstName',
      'getLastName',
      'getEmail'
    ])
  }
}
</script>

<style scoped lang="scss">
.display-user-info {
  border: 1px solid orange;
  border-radius: 5px;
  margin: 0 3vw;
  > div {
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 1vh 1vw;
    color: white;
    span {
      font-weight: bold;
    }
  }
}
</style>
