import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Packages from '../../components/Packages.vue'

const bootstrap = () => {
  return mount(Packages, {})
}

describe('Packages Component Tests', () => {
  it('Renders the component', () => {
    const wrapper = bootstrap()

    expect(wrapper.vm).toBeTruthy()
  })
  it('Displays the expected text', async () => {
    const wrapper = bootstrap()

    const title = wrapper.get('[data-test=title]')
    const paragraph = wrapper.get('[data-test=paragraph]')

    expect(title.text()).toEqual('V3')
    expect(paragraph.text()).toEqual('Enjoy end-to-end type-safety')
  })
})
