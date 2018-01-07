<template>
  <div>
    <v-input name="task" @enter="submit" @change="change" :clear="clearTrigger" placeholder="Input then enter."/>
    <v-button class="add" text="Add" @click="submit"/>
  </div>
</template>

<script>
import VInput from '@/components/parts/VInput';
import VButton from '@/components/parts/VButton';
import * as MT from '@/mutation-types';

export default {
  name: 'task-add-input',
  data() {
    return {
      taskTitle: null,
      clearTrigger: 0,
    };
  },
  methods: {
    change(event) {
      this.taskTitle = event.value;
    },
    submit() {
      if (!this.taskTitle) {
        return;
      }

      const task = {
        title: this.taskTitle,
      };

      this.$store.commit(MT.ADD_TASK, task);
      this.taskTitle = null;
      this.clearTrigger += 1;
    },
  },
  components: {
    VInput,
    VButton,
  },
};
</script>