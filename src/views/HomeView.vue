<!--
 * @Author       : ganbowen
 * @Date         : 2022-05-13 15:08:57
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-05-13 17:15:29
 * @Descripttion : 
-->
<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />
    <div>{{ useCounterStore().counter }}</div>
  </main>
</template>
