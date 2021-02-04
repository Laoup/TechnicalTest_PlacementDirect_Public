<template>
  <section class="splash">
      <vue-typed-js :strings="[dynamic_title]">
        <h1>{{static_title}}
          <span class="typing"></span>
        </h1>
      </vue-typed-js>
  </section>
</template>

<script>
export default {
  name: 'Splashscreen',
  props: {
    static_title: String,
    dynamic_title: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.splash {
  background-color: black;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //text-align: center;
  h1 {
    color: white;
    margin: auto;
  }
}
</style>
