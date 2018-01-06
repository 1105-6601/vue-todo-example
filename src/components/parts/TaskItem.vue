<template>
  <li :class="{ done: task.done }">
    <span>{{ task.title }}</span>
    <v-button :text="task.done ? 'Incomplete' : 'Done'" class="default sm" @click="done(task)"/>
    <v-button text="Delete" class="default sm" @click="del(task)"/>
  </li>
</template>

<script>
import VButton from '@/components/parts/VButton';
import * as MT from '@/mutation-types';

export default {
  name: 'task-item',
  props: ['task'],
  methods: {
    done(task) {
      this.$store.commit(MT.DONE_TASK, task);
    },
    del(task) {
      this.$store.commit(MT.DELETE_TASK, task);
    },
  },
  components: {
    VButton,
  },
};
</script>

<style scoped>
li {
  line-height: 20px;
}
li{
  list-style: none;
  position:relative;
  margin: 0;
  padding: 0 0 0 20px;
}
li:before{
  content: '';
  height: 0;
  width: 0;
  display: block;
  border: 5px transparent solid;
  border-right-width: 0;
  border-left-color: #aaa;
  position: absolute;
  top: 7px;
  left: 8px;
}
li:after{
  content: '';
  height: 2px;
  width: 10px;
  display: block;
  background: #aaa;
  position: absolute;
  top: 11px;
  left: 0;
}
li.done span {
  text-decoration: line-through;
}
li span {
  font-size: 14px;
}
</style>