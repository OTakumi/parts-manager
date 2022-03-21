<template>
  <div id="top">
    <img
      class="top-logo m-auto"
      alt="Rust Wasm logo"
      src="./img/wasm-ferris.png"
    />
    <h1 class="text-3xl">Hello World!</h1>
    <InputForm id="email_form" type="text" v-model="email" />
  </div>
</template>

<script>
import InputForm from "./components/atoms/InputForm.vue";
export default {
	components: {
 	   InputForm,
 	},
};
</script>

<style lang="scss">
#top {
  .top-logo {
    width: 300px;
  }
}
</style>