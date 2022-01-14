<template>
  <div class="about">
    <h1>About</h1>
    <h2>{{ story }}</h2>
    <button @click="getData">获取故事</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "About",
  props: {
    msg: String,
  },
  data() {
    return {
      story: "",
    };
  },
  methods: {
    getData() {
      axios
        .post("/user/getData")
        .then((res) => {
          console.log(res);
          if (res.data.errCode === 0) {
            // this.story = res.data.story;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {},
};
</script>