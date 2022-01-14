<template>
  <div class="hello">
    <button @click="login">登录</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    login() {
      axios
        .post("/user/login")
        .then((res) => {
          console.log(res);
          if (res.data.errCode === 0) {
            this.$router.push("/about");
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log(error);
        });
    },
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
