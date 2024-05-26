import { render } from '@testing-library/react'
import { Comments } from './Comments'
import { describe, test, expect } from 'vitest'

describe('Comments component', () => {
  test('renders Comments component', () => {
    const { getByText } = render(<Comments />)

    expect(getByText('Comments')).toBeDefined()
  })
})
