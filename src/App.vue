<template>
  <div
    class="bg-gray-100 text-gray-700 antialiased w-screen h-screen overflow-y-scroll p-3 dark:bg-black dark:text-gray-200"
  >
    <div id="app" class="max-w-sm mx-auto">
      <Box />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Box from "./components/Box.vue";

@Component({
  components: {
    Box
  }
})
export default class App extends Vue {}
</script>
