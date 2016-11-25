import Vue from 'vue'
import ComponentsPane from 'src/components/ComponentsPane'

describe('ComponentsPane.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(ComponentsPane)
    })
    const headerText = vm.$el.querySelector('.components-pane h2').textContent
    expect(headerText).to.equal('Components')
  })
})
