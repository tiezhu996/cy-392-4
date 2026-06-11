<script setup lang="ts">
import type { CraftWork } from "../types/work";
import LazyImage from "./LazyImage.vue";
const props = defineProps<{ work: CraftWork; viewedAt?: string }>();
defineEmits<{ select: [CraftWork]; like: [string]; collect: [string] }>();
function formatTime(iso: string) {
  const d = new Date(iso);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (mins < 1) return "刚刚";
  if (mins < 60) return `${mins} 分钟前`;
  if (hours < 24) return `${hours} 小时前`;
  if (days < 7) return `${days} 天前`;
  return d.toLocaleDateString();
}
</script>

<template>
  <article class="work-card">
    <LazyImage :src="work.images[0]" :alt="work.title" @click="$emit('select', work)" />
    <div class="card-body">
      <h3>{{ work.title }}</h3>
      <p>{{ work.description }}</p>
      <div class="meta">
        <span>{{ work.difficulty }}</span>
        <span>{{ work.durationHours }} 小时</span>
        <span v-if="viewedAt" class="viewed-at">浏览于 {{ formatTime(viewedAt) }}</span>
      </div>
      <div class="actions">
        <button @click="$emit('like', work.id)">赞 {{ work.likes }}</button>
        <button @click="$emit('collect', work.id)">{{ work.collected ? "已收藏" : "收藏" }}</button>
      </div>
    </div>
  </article>
</template>
