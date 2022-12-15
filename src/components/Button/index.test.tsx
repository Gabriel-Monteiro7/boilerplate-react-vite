import React from 'react'

import Button from '.'

import { render, screen, describe, it, expect } from '~/utils/testing-library'

describe('<Button/>', () => {
  const { findByRole } = screen
  it('Render the button title', async () => {
    render(<Button text="Teste" />)
    const button = await findByRole('button', { name: 'Teste' })

    expect(button).toBeInTheDocument()
  })
})
