import Vue from 'vue'
import HeaderPane from 'src/components/HeaderPane'

describe('HeaderPane.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(HeaderPane)
    })
    const headerText = vm.$el.querySelector('.header-pane h1').textContent
    expect(headerText).to.contain('Vue')
    expect(headerText).to.contain('Friend')
  })
})
