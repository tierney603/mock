<template>
  <div class="home">
    <h1>home</h1>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "Home",
  props: {
    msg: String,
  },

  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
