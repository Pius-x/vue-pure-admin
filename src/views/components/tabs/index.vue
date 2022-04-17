<template>
  <div>
    <el-tabs v-model="curView" type="border-card">
      <el-tab-pane v-for="(label, key) in tabList" :label="label" :key="key" :name="key" />
      //动态组件变化时不会销毁组件
      <!--      <keep-alive>-->
      <component :is="curView" />
      <!--      </keep-alive>-->
    </el-tabs>
  </div>
</template>

<script lang="ts">
import draggable from "./subview/draggable.vue";
import mapComp from "./subview/map.vue";
import videoComp from "./subview/video.vue";
import { ref, computed } from "vue";

export default {
  components: {
    draggable,
    mapComp,
    videoComp
  },

  setup() {
    const curView = ref("draggable");
    const tabList = computed(() => {
      return {
        draggable: "拖拽列表",
        mapComp: "地图",
        videoComp: "视频"
      };
    });

    return {
      curView,
      tabList
    };
  }
};
</script>
