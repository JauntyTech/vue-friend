import Vue from 'vue'
import VuexPane from 'src/components/VuexPane'

describe('VuexPane.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(VuexPane)
    })
    const headerText = vm.$el.querySelector('.vuex-pane h2').textContent
    expect(headerText).to.equal('Vuex')
  })
})
