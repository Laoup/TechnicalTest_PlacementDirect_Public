<template>
  <article class="form-patch-user-info">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
      >
        <label for="input-1">Email:</label>
        <b-form-input
          id="input-1"
          v-model="form.email"
          placeholder="Entrez un nouvel email..."
          >
        </b-form-input>
      </b-form-group>


      <b-button type="submit" variant="success">Modifier les informations</b-button>
    </b-form>
  </article>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'FormPatchUserInfo',
  data() {
    return {
      form: {
        email: null,
      }
    }
  },
  methods: {
    ...mapActions(['actionPatchUser']),
    async onSubmit(e) {
      try {
        e.preventDefault();

        await this.actionPatchUser(this.form);
      } catch (e) {
        console.log("Something wrong happened during patch of personal information");
        console.log(e);
      }
    }
  }
}
</script>

<style lang="scss">
.form-patch-user-info {
  border: 1px solid orange;
  border-radius: 5px;
  margin: 0 3vw;
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1vh 1vw;
    color: white;
    label {
      width: 100%;
      text-align: start;
      font-weight: bold;
    }
  }
}
</style>
