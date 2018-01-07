<template>
  <div>
    <task-add-input/>
    <h1>Tasks:</h1>
    <v-radio :options="modes" @change="modeChange" :default="mode"/>
    <ul>
      <li v-for="(task, index) in tasks" is="task-item" :task="task" :index="index"></li>
    </ul>
  </div>
</template>

<script>
import TaskItem from '@/components/parts/TaskItem';
import TaskAddInput from '@/components/parts/TaskAddInput';
import VRadio from '@/components/parts/VRadio';

export default {
  name: 'index',
  data() {
    return {
      mode: 0,
      modes: [
        { value: 0, text: 'all' },
        { value: 1, text: 'done' },
        { value: 2, text: 'incomplete' },
      ],
    };
  },
  computed: {
    tasks() {
      switch (this.mode) {
        case 0:
          return this.$store.getters.allTasks;
        case 1:
          return this.$store.getters.doneTasks;
        case 2:
          return this.$store.getters.incompleteTasks;
        default:
        // noop
      }
      return [];
    },
  },
  methods: {
    modeChange(value) {
      this.mode = value;
    },
  },
  components: {
    TaskItem,
    TaskAddInput,
    VRadio,
  },
};
</script>

<style scoped>
h1 {
  margin: 20px 0 10px;
}
</style>
