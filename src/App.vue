<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import { MainModule } from "@/store/modules/main";
@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  get count() {
    return MainModule.count;
  }

  async mounted() {
    await MainModule.increment(5);
    console.log("TCL: App -> mounted -> count", this.count);

    await MainModule.decrement(2);
    console.log("TCL: App -> mounted -> count", this.count);
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
