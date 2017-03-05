import React from 'react'
import Link from './link'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Link src='http://npm-janitor.now.sh'/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
