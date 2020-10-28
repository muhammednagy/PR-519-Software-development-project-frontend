<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to NiceHi
        </h1>

        <p class="subheading font-weight-regular">
          A platform to meet people with similar minds and interests
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >

        <v-btn
            color="primary"
            elevation="8"
            rounded
            x-large
            to="/login"
        >Login</v-btn>
      </v-col>
      <v-col
          class="mb-5"
          cols="12"
      >

        <v-btn
            color="primary"
            elevation="8"
            rounded
            x-large
            to="/signup"
        >Sign up</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
    }),
  }
</script>
