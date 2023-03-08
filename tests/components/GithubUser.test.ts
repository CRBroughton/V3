import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import GithubUser from '../../components/GithubUser.vue'

interface Props {
  name?: string | null
  image?: string | null
}

const bootstrap = (props?: Props) => {
  return mount(GithubUser, {
    props: { ...props },
  })
}

describe('GithubUser Component Tests', () => {
  it('Renders the component', () => {
    const wrapper = bootstrap()

    expect(wrapper.vm).toBeTruthy()
  })
  it('Displays the prop data', async () => {
    const wrapper = bootstrap(
      {
        name: 'Craig Broughton',
        image: 'https://example.com',
      },
    )

    expect(wrapper.text()).toContain('Craig Broughton')
    expect(wrapper.find('img')
      .attributes('src'))
      .toContain('https://example.com')
  })
})
