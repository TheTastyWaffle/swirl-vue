<template>
  <div>
    <ul v-if="THEMEs && THEMEs.length">
      <li v-for="THEME of THEMEs">
        <THEME v-bind:THEME=THEME v-on:successfulDeletion="fetchTHEME"/> <!-- Passing object as prop, calling method on signal -->
      </li>
    </ul>
    <p v-if="this.error !== null">{{ this.error.message }}</p>
    <addTHEME v-on:successfulAddition="fetchTHEME"/> <!-- calling method on signal -->
  </div>
</template>

<script>
  import axios from 'axios';
  import THEME from "./THEME";
  import AddTHEME from "./AddTHEME";

  export default {
    components: {
      AddTHEME,
      THEME
    },
    name: 'THEMEContainer',
    data() {
      return {
        loading: false,
        THEMEs: [],
        error: null
      }
    },
    created() {
      this.fetchTHEME();
    },
    methods: {
      fetchTHEME: function () {
        this.loading = true;
        axios.get('http://localhost:8080/THEME')
          .then(res => {
            this.loading = false;
            this.THEMEs = res.data.data;
            this.error = null;
          })
          .catch(e => {
            this.loading = false;
            this.error = e;
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    padding: 0;
    list-style: none;
  }
</style>
