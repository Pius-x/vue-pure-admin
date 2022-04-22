<!--这里是重点 -->
<template>
  <h1>你的评分是 {{ score }}</h1>
  <star-rate v-model="score" />
</template>
<script setup lang="ts">
import StarRate from "/@/components/StarRate";
import { ref } from "vue";
let score = ref(2.5);
</script>
