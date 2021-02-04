<template>
  <section class="subscribe">
    <vue-typed-js :strings="['Inscrit-toi ici !']">
      <h2 class="typing"></h2>
    </vue-typed-js>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
      >
        <label for="input-1">Prénom:</label>
        <b-form-input
          id="input-1"
          v-model="form.firstName"
          placeholder="Inscrivez votre prénom ici..."
          >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
      >
        <label for="input-2">Nom:</label>
        <b-form-input
          id="input-2"
          v-model="form.lastName"
          placeholder="Inscrivez votre nom ici..."
          >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
      >
        <label for="input-3">Email:</label>
        <b-form-input
          id="input-3"
          v-model="form.email"
          placeholder="Inscrivez votre email ici..."
          >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
      >
        <label for="input-4">Password:</label>
        <b-form-input
          id="input-4"
          v-model="form.password"
          placeholder="Veuillez entrer un mot de passe..."
          >
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">S'inscrire</b-button>
    </b-form>
  </section>
</template>

<script>

export default {
  name: 'Subscribe',
  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        email: null,
        password: null
      },
      message: null
    }
  },
  methods: {
    async onSubmit(e) {
      try {
        e.preventDefault();

        await this.$http.post("http://localhost:3000/user/subscribe", this.form);
        this.message = "Inscription réussi rendez-vous sur la page Connexion !";
        this.$router.push('/login');
      } catch (e) {
        this.message = "L'inscription ne s'est pas déroulé correctement, veuillez réessayer plus tard";
      }
    }
  }
}
</script>

<style scoped lang="scss">
.subscribe {
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
