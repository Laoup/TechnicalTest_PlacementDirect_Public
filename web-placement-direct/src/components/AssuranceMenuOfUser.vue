<template>
  <section class="assurance-menu-user">
    <div>
      <b-card v-for="assurance in this.assurancesUser"
        :key="assurance.id"
        :title="assurance.title"
        tag="article"
        >
        <b-card-text>
          Praesent ac porta est. Donec sollicitudin nibh augue, in tempus ex porta id. Praesent vitae est scelerisque, tincidunt erat eget, efficitur lacus.
          Vestibulum id quam eu mauris aliquet porttitor in non tortor. Nullam eget lacinia turpis.
        </b-card-text>
        <b-card-text>
          Pour une valeure de: {{ assurance.price }}€
        </b-card-text>
      </b-card>
    </div>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'AssuranceMenuOfUser',
  data() {
    return {
      assurancesUser: []
    }
  },
  computed: {
    ...mapGetters([
      'getAllAssurances',
      'getToken'
    ])
  },
  async mounted() {
      let response = await this.$http.get("http://localhost:3000/contract/id-user", {
        headers: {
          'authorization': `Bearer ${this.getToken}`
        }
      });
      //The 4 following lines return the contracts owned by the user
      response.data.forEach((item) => {
         const contract = this.getAllAssurances.find((elem) => elem.id === item.id_contract);
         this.assurancesUser.push(contract);
      });
  }
}
</script>

<style lang="scss" scoped>
.assurance-menu-user {
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
    justify-content: space-evenly;
    article {
      background-color: black;
      color: white;
      border: 1px solid orange;
      width: 20%;
    }
  }
}
</style>
