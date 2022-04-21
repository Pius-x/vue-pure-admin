<template>
  <div>
    <el-tabs v-model="curView" type="border-card">
      <el-tab-pane v-for="(item, index) in tabList" :label="item.label" :key="index" :name="index" />
      <!--      动态组件变化时不会销毁组件-->
      <!--      <keep-alive>-->
      <component :is="tabList[curView].component" />
      <!--      </keep-alive>-->
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import draggable from "./subview/draggable.vue";
import myHome from "./subview/home.vue";
import videoComp from "./subview/video.vue";
import { ref } from "vue";

const tabList: { component: any; label: string }[] = [
  { component: myHome, label: "主页" },
  { component: draggable, label: "拖拽列表" },
  { component: videoComp, label: "视频" }
];

const curView = ref(0);
</script>
