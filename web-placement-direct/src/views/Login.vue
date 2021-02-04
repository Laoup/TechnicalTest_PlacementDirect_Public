<template>
  <section class="login">
  <vue-typed-js :strings="['Connecte toi ici !']">
    <h2 class="typing"></h2>
  </vue-typed-js>
  <b-form @submit="onSubmit">
    <b-form-group
      id="input-group-1"
    >
      <label for="input-1">Email:</label>
      <b-form-input
        id="input-1"
        v-model="form.email"
        placeholder="Veuillez saisir votre email ici..."
        >
      </b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-2"
    >
      <label for="input-2">Password:</label>
      <b-form-input
        id="input-2"
        v-model="form.password"
        placeholder="Veuillez entrer votre mot de passe..."
        >
      </b-form-input>
    </b-form-group>

    <b-button type="submit" variant="success">Se connecter</b-button>
  </b-form>
  </section>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions(['actionLogin']),
    async onSubmit(e) {
      try {
        e.preventDefault();

        await this.actionLogin(this.form);
        this.$router.push('/dashboard');
      } catch (e) {
        console.log("Something wrong happened during your connection :( ...");
        console.log(e);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  background-color: black;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .typed-element {
    margin-top: 10vh;
    color: orange;
  }
  form {
    width: 60%;
    margin: auto;
    border: 2px solid orange;
    border-radius: 5px;
    padding: 2vh 2vw;
    label {
      width: 100%;
      text-align: start;
      color: white;
    }
  }
}
</style>
