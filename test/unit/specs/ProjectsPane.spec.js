import Vue from 'vue'
import ProjectsPane from 'src/components/ProjectsPane'

describe('ProjectsPane.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(ProjectsPane)
    })
    const headerText = vm.$el.querySelector('.projects-pane h2').textContent
    expect(headerText).to.equal('Projects')
  })
})
