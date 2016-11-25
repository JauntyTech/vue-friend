import Vue from 'vue'
import StatePane from 'src/components/StatePane'

describe('StatePane.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(StatePane)
    })
    const headerText = vm.$el.querySelector('.state-pane h2').textContent
    expect(headerText).to.equal('State')
  })
})
