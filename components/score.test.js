import React from 'react'
import Score from './score'
import renderer from 'react-test-renderer'

it('renders correctly when module has errors', () => {
  let module = {
    errors: ['invalid name'],
    warnings: []
  }
  const tree = renderer.create(
    <Score module={module}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly when score > 6 ', () => {
  let module = {
    errors: [],
    warnings: []
  }
  const tree = renderer.create(
    <Score module={module}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly when score <= 6 ', () => {
  let module = {
    errors: [],
    warnings: ['warning 1', 'warning 2', 'warning 3', 'warning 4']
  }
  const tree = renderer.create(
    <Score module={module}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
