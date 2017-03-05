import React from 'react'
import User from './user'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  let props = {
    url: {query: {name: 'siddharthkp'}},
    modules: []
  }
  const tree = renderer.create(
    <User {...props}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
