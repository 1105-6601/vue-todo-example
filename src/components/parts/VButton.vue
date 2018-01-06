<template>
  <button type="button" :class="className" @click="click">{{ text }}</button>
</template>

<script>
  export default {
    name: 'v-button',
    props: {
      text: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        default: 'default nm',
      },
    },
    methods: {
      click() {
        this.$emit('click');
      },
    },
  };
</script>

<style scoped>
button {
  border-radius: 3px;
  color: #fff;
  border: none;
  margin-left: 5px;
  vertical-align: middle;
}
button.default {
  background: #42b983;
}
button.nm {
  font-size: 14px;
  padding: 5px 9px;
}
button.sm {
  font-size: 10px;
  padding: 3px 7px;
}
</style>