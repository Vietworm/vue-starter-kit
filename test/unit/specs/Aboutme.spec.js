import Vue from 'vue'
import Aboutme from 'src/components/Aboutme'

describe('Aboutme.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Aboutme)
    })
    expect(vm.$el.querySelector('.aboutme h1').textContent)
      .to.equal('Aboutme & 100dayproject dream comes true!!')
  })
})
