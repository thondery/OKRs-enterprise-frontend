<template>
  <div>
    Hello mọi người 💕
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component<HomePage>({
  name: 'HomePage',
})
export default class HomePage extends Vue {}
</script>
