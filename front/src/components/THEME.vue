<template>
  <div>
    <p style="font-weight: bold">{{ this.THEME.author }}</p>
    <p>{{ this.THEME.id }}</p>
    <p v-if="this.error !== null">{{ this.error.message }}</p>
    <button v-on:click="this.deleteTHEME">X</button>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'THEME',
    props: {
      THEME: Object //Object passed as prop
    },
    data()  {
      return {
        error: null
      }
    },
    methods: {
      deleteTHEME: function() {
        const id = this.THEME.id;
        axios.delete('http://localhost:8080/THEME/' + id)
          .then(() => {
            this.$emit('successfulDeletion'); //signal emission
            this.error = null;
          })
          .catch(e => {
            this.error = e;
          })
      }
    }
  }
</script>

<style scoped>

</style>
