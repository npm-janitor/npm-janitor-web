import React from 'react'
import Score from './score'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  let module = {
    errors: [],
    warnings: []
  }
  const tree = renderer.create(
    <Score module={module}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
