<template>
  <div class="hello"></div>
</template>
<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    axios
      .get("/getDataList")
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        // 请求失败处理
        console.log(error);
      });
  },
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
