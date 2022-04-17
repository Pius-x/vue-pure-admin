<template>
  <div>
    <el-tabs v-model="currentView" type="border-card">
      <el-tab-pane v-for="(name, key) in tabList" :label="name" :key="key" :name="key">
        <component v-if="currentView === key" :is="currentView" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import draggable from "./subview/draggable.vue";
import mapComp from "./subview/map.vue";
import videoComp from "./subview/video.vue";
export default {
  components: {
    draggable,
    mapComp,
    videoComp
  },
  data() {
    return {
      currentView: "draggable"
    };
  },
  computed: {
    tabList() {
      return {
        draggable: "拖拽列表",
        mapComp: "地图",
        videoComp: "视频"
      };
    }
  }
};
</script>
