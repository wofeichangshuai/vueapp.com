<template>
  <div class="component-a">
    <!-- 一个简单的树形组件 -->
    <tree :treeData1="treeData"></tree>
  </div>
</template>
<script>
export default {
  //   name: "component-a",
  data() {
    return {
      treeData: [
        {
          title: "树形标题一",
          expand: true,
          children: [
            {
              title: "子标题1",
              expand: true,
              children: [
                {
                  title: "子子标题1",
                  expand: true
                }
              ]
            }
          ]
        },
        {
          title: "树形标题二",
          expand: true,
          children: [
            {
              title: "子标题2.1",
              expand: true
            },
            {
              title: "子标题2.2",
              expand: true
            },
            {
              title: "子标题2.3",
              expand: true
            }
          ]
        }
      ]
    };
  },
  components: {
    // 自定义组件
    tree: {
      // 组件的名称
      name: "tree-2",
      // 模板
      template: ` 
            <ul>
               <li v-for="item in treeData1">
                 <span>{{item.title}}</span>
	         <!-- 在组件内部调用自己 -->
                 <tree-2 v-if="item.children" :treeData1="item.children"></tree-2 >
               </li>
            </ul>`,
      // 通过父组件传递的数据
      props: ["treeData1"]
    }
  },
  methods: {}
};
</script>

<style  scoped></style>