<template>
  <div class="users">ghfghdfs
    <h1>Users</h1>
    <!-- 添加用户信息 -->
    <form @:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter name">
      <input type="text" v-model="newUser.email" placeholder="Enter email">
      <input type="submit" value="Submit">
    </form>

    <!-- 展示用户信息 -->
    <ul>
      <li v-for="(user,index) in users" v-bind:key="index">
        <input type="checkbox" v-model="user.contacted" />
        <span :class="{contacted:user.contacted}">
          {{user.name}}：{{user.email}}
          <button v-on:click="deleteUser(user)">×</button>
        </span>
      </li>
    </ul>
    <select v-model="sel">
      <option value="1">西安</option>
      <option value="2">宝鸡</option>
      <option value="3">咸阳</option>
    </select>
    <h4>{{sel}}</h4>
    <select v-model="sel_arr" multiple>
      <option value="1">西安</option>
      <option value="2">宝鸡</option>
      <option value="3">咸阳</option>
    </select>
    <h4>{{sel_arr}}</h4>
    <div>
      <com1></com1>
      <com2></com2>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
var Event = new Vue();
export default {
  name: "users",
  data() {
    return {
      sel: null,
      sel_arr: [],
      newUser: {
        name: "",
        email: ""
      },
      users: [
        {
          name: "zhangqiang1",
          email: "12354@qq.com",
          contacted: false
        },
        {
          name: "zhangqiang2",
          email: "12354@qq.com",
          contacted: false
        },
        {
          name: "zhangqiang3",
          email: "12354@qq.com",
          contacted: false
        },
        {
          name: "zhangqiang4",
          email: "12354@qq.com",
          contacted: false
        }
      ]
    };
  },
  methods: {
    addUser(e) {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      e.preventDefault();
    },
    deleteUser(user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        this.users = response.data;
      });
    var Event = this;
  },
  components: {
    com1: {
      data() {
        return {
          i_sied: "",
          com_sied: ""
        };
      },
      template: `
      <div>我说：<input type="text" v-on:keyup="on_change" v-model="i_sied"/>{{i_sied}}</div>
    `,
      methods: {
        on_change() {
          Event.$emit("aaa", this.i_sied);
        }
      }
    },
    com2: {
      data() {
        return {
          com1_sied: ""
        };
      },
      template: `
      <div>com1说：{{com1_sied}}</div>
    `,
      mounted() {
        var me = this;
        Event.$on("aaa", function(data) {
          me.com1_sied = data;
        });
      }
    }
  }
};
</script>

<style scoped>
.contacted {
  text-decoration: line-through;
}
</style>