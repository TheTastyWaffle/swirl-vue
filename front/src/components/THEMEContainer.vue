<template>
  <div>
    <div>
      <ul v-if="THEMEs && THEMEs.length">
        <li v-for="THEME of THEMEs">
          <p><strong>{{THEME.author}}</strong></p>
          <p>{{THEME.id}}</p>
        </li>
      </ul>

      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  const axiosOpt = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  };

  export default {
    name: 'THEMEContainer',
    data() {
      return {
        loading: false,
        THEMEs: [],
        errors: []
      }
    },
    created() {
      axios.get('http://localhost:8080/THEME')
        .then(res => {
          this.THEMEs = res.data.data;
        })
        .catch(e => {
          this.errors.push(e)
        });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    list-style: none;
  }
</style>
