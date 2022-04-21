<template>
  <div>
    <el-tabs v-model="curView" type="border-card">
      <el-tab-pane v-for="item in tabList" :label="item.label" :key="item.key" :name="item.key" />
      <!--      动态组件变化时不会销毁组件-->
      <!--      <keep-alive>-->
      <component :is="curView" />
      <!--      </keep-alive>-->
    </el-tabs>
  </div>
</template>

<script lang="ts">
import draggable from "./subview/draggable.vue";
import myHome from "./subview/home.vue";
import videoComp from "./subview/video.vue";
import { ref } from "vue";

export default {
  components: {
    draggable,
    myHome,
    videoComp
  },

  setup() {
    const tabList: { key: string; label: string }[] = [
      { key: "myHome", label: "主页" },
      { key: "draggable", label: "拖拽列表" },
      { key: "videoComp", label: "视频" }
    ];

    const curView = ref(tabList[0]["key"]);

    return {
      curView,
      tabList
    };
  }
};
</script>
