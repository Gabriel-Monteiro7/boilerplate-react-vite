import React from 'react'

import { Container } from './styles'

export type variants = 'text' | 'contained' | 'outlined'

type ButtonProps = {
  text?: string
  variant?: variants
}

const Button: React.FC<ButtonProps> = ({
  text = 'Default',
  variant = 'text'
}) => {
  return <Container variant={variant}>{text}</Container>
}

export default Button
