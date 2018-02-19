<template>
  <div>
    <input v-model="author" placeholder="author's name"> <!-- both way field ('author') edition -->
    <button v-on:click="postAuthor">Add</button>
    <p v-if="error !== null">{{ this.error.message }}</p>
  </div>
</template>

<script>
  import axios from 'axios';

  const axiosOpt = {
    body: {
      'author': this.author
    }
  };

  export default {
    name: 'addTHEME',
    data() {
      return {
        author: '',
        error: null
      }
    },
    methods: {
      postAuthor: function() {
        axios.post('http://localhost:8080/THEME', {'author': this.author}) //body parameter
          .then(() => {
              this.author = '';
              this.$emit('successfulAddition'); //signal emission
              this.error = null;
            }
          )
          .catch(e => {
            this.error = e;
          });
      }
    }
  }
</script>

<style scoped>

</style>
