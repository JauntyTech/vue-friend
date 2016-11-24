import Vue from 'vue'
import VuePane from 'src/components/VuePane'

describe('VuePane.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(VuePane)
    })
    const headerText = vm.$el.querySelector('.vue-pane h2').textContent
    expect(headerText).to.equal('Vue')
  })
})
