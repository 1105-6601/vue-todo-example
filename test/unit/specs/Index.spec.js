import Vue from 'vue';
import Index from '@/components/pages/Index';
import router from '@/router';
import store from '@/store';

describe('Index.vue', () => {

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Index);
    const vm = new Constructor({router, store}).$mount();

    expect(vm.$el.querySelector('h1').textContent).toEqual('Tasks:');
    expect(vm.$el.querySelectorAll('.radio-group').length).toEqual(3);
    expect(vm.$el.querySelector('[name="task"]').placeholder).toEqual('Input then enter.');
  });

});
