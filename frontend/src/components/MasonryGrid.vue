<script setup lang="ts">
import type { CraftWork, ViewHistory } from "../types/work";
import WorkCard from "./WorkCard.vue";
const props = defineProps<{ works: CraftWork[]; viewHistory?: ViewHistory[] }>();
defineEmits<{ select: [CraftWork]; like: [string]; collect: [string] }>();
function getViewedAt(workId: string) {
  return props.viewHistory?.find((h: ViewHistory) => h.id === workId)?.viewedAt;
}
</script>

<template>
  <section class="masonry">
    <WorkCard v-for="work in works" :key="work.id" :work="work" :viewed-at="getViewedAt(work.id)" @select="$emit('select', $event)" @like="$emit('like', $event)" @collect="$emit('collect', $event)" />
  </section>
</template>
