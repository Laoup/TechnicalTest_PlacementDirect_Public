<template>
  <div class="home">
    <Splashscreen
      static_title="Placement Direct"
      dynamic_title=" est heureux de vous accueillir !"
    />
    <AssuranceMenu />
  </div>
</template>

<script>

import Splashscreen from'@/components/Splashscreen.vue';
import AssuranceMenu from'@/components/AssuranceMenu.vue';

export default {
  name: 'Home',
  components: {
    Splashscreen,
    AssuranceMenu
  }
}
</script>
