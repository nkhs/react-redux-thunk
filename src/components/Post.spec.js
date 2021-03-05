import React from 'react'
import { shallow } from 'enzyme'
import Post from './Post'

const setup = (p = { title: 'test', body: 'body' }) => {

  const component = shallow(
    <Post p={p} />
  )

  return {
    component: component,
    b: component.find('b'),
    p: component.find('p'),
  }
}

describe('Post component', () => {
  it('should display title', () => {
    const { b, p } = setup()
    expect(b.text()).toMatch(/^test/)
    expect(p.text()).toMatch(/^body/)

  })

})
