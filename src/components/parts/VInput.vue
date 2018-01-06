<template>
  <input type="text" :name="name" v-model.trim="data" @change="change" @keyup.enter="enter" :placeholder="placeholder"/>
</template>

<script>
export default {
  name: 'v-input',
  data() {
    return {
      data: null,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    clear: null,
    placeholder: String,
  },
  watch: {
    clear(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.data = null;
      }
    },
  },
  methods: {
    change() {
      this.$emit('change', { value: this.data });
    },
    enter() {
      this.$emit('enter', { value: this.data });
    },
  },
};
</script>

<style scoped>
input {
  line-height: 20px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: 0;
  color: #fff;
}
</style>