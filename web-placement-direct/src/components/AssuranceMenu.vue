<template>
  <section class="assurance-menu">
    <div>
      <b-card v-for="assurance in getAllAssurances"
        :key="assurance.id"
        :title="assurance.title"
        tag="article"
        >
        <b-card-text>
          Praesent ac porta est. Donec sollicitudin nibh augue, in tempus ex porta id. Praesent vitae est scelerisque, tincidunt erat eget, efficitur lacus.
          Vestibulum id quam eu mauris aliquet porttitor in non tortor. Nullam eget lacinia turpis.
        </b-card-text>
      </b-card>
    </div>
  </section>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AssuranceMenu',
  computed: {
    ...mapGetters([
      'getAllAssurances'
    ])
  },
  methods: {
    ...mapActions([
      'actionGetAssurances'
    ]),
  },
  mounted() {
    this.actionGetAssurances();
  }
}
</script>

<style scoped lang="scss">
.assurance-menu {
  background-color: black;
  width: 100%;
  height: 40vh;
  padding: 1vh 0;
  display: flex;
  align-items: center;
  > div {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    article {
      background-color: black;
      color: white;
      border: 1px solid orange;
      width: 20%;
    }
  }
}
</style>
