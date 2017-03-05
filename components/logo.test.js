import React from 'react'
import Logo from './logo'
import renderer from 'react-test-renderer'

it('renders big version', () => {
  const tree = renderer.create(
    <Logo big/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders small version', () => {
  const tree = renderer.create(
    <Logo/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
