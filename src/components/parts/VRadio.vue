<template>
  <div>
    <div class="radio-group" v-for="(option, index) in options">
      <input type="radio" :id="index" :value="option.value" v-model="value" @change="change">
      <label :for="index">{{ option.text }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-radio',
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: [String, Number],
  },
  data() {
    return {
      value: this.default,
    };
  },
  methods: {
    change() {
      this.$emit('change', this.value);
    },
  },
};
</script>

<style scoped>
input {
  vertical-align: bottom;
}
label {
  font-size: 12px;
}
.radio-group {
  display: inline;
  margin-right: 15px;
}
</style>
