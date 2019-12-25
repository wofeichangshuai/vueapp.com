<template>
  <div id="blog">
    <div class="side">
      <a class="logo">张强</a>
      <div class="nav">Every single time you access a website, you leave tracks. Tracks that others can access. If you
        don't like the idea, find out what software can help you cover them.</div>
      <div class="about">
        <a href="#">关于我</a>
        <a href="#">联系我</a>
        <a href="#">关注我</a>
      </div>
      <div class="menu">
        <a href="#">#亲亲我</a>
        <a href="#">#抱抱我</a>
        <a href="#">#宠宠我</a>
      </div>
    </div>

    <div class="container" ref="container">
      <div class="item">
        <a @click="article_click" class="title">How To Cover Your Tracks On The Internet</a>
        <div class="ann">Source: 2008-06-25 English BBS Favorite</div>
        <div class="content">
          Anti Tracks is a complete solution to protect your privacy and enhance your PC performance.
          With a simple click Anti Tracks securely erase your internet tracks, computer activities and programs history
          information stored in many hidden files on your computer.Anti Tracks
        </div>
      </div>
      <div class="item">
        <a class="title">How To Cover Your Tracks On The Internet</a>
        <div class="ann">Source: 2008-06-25 English BBS Favorite</div>
        <div class="content">
          Anti Tracks is a complete solution to protect your privacy and enhance your PC performance.
          With a simple click Anti Tracks securely erase your internet tracks, computer activities and programs history
          information stored in many hidden files on your computer.Anti Tracks
        </div>
      </div>
      <div class="item">
        <a href="#" class="title">How To Cover Your Tracks On The Internet</a>
        <div class="ann">Source: 2008-06-25 English BBS Favorite</div>
        <div class="content">
          Anti Tracks is a complete solution to protect your privacy and enhance your PC performance.
          With a simple click Anti Tracks securely erase your internet tracks, computer activities and programs history
          information stored in many hidden files on your computer.Anti Tracks
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "vue-router";
export default {
  name: "blog",
  data() {
    return {};
  },
  methods: {
    article_click() {
      // alert("qweqwe");
      this.$router.push("/article/aaa");
    }
  }
};
</script>

<style scoped>
.side {
  float: left;
}
.container {
  float: right;
  width: 50%;
  margin-right: 28%;
  margin-top: 30px;
  background-color: #fff;
}

.side a,
.container a {
  text-decoration: none;
  color: rgb(158, 153, 153);
  display: block;
  text-align: center;
  transition: color 200ms;
}

.side a:hover {
  color: #eee;
}

.side {
  width: 20%;
  margin-top: 30px;
  margin-left: 30px;
  position: fixed;
}

.side *,
.container * {
  padding: 12px 25px;
}

.side .logo {
  color: #eee;
  cursor: pointer;
  width: 60px;
  text-align: center;
  border: 5px solid #fff;
  margin: auto;
}

.container .title {
  text-align: left;
  font-size: 25px;
  font-weight: 700;
}

.container .ann {
  color: rgb(221, 219, 219);
  font-size: 13px;
}

.container .content {
  color: #999;
}

.container .item {
  border-bottom: 1px solid #eee;
}
</style>