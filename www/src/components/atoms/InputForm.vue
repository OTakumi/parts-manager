<template>
  <div class="input_form">
    <input
      class="
        shadow
        appearance-none
        border
        rounded
        w-full
        py-2
        px-3
        text-gray-700
        leading-tight
      "
      :id="id"
      :type="type"
      :value="value"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, require: true },
    type: { type: String, require: true },
    value: { type: String, require: true },
    placeholder: { type: String, require: false },
  },
  methods: {
    updateValue: function (e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>