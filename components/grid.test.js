import React from 'react'
import Grid from './grid'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Grid>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Grid>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
