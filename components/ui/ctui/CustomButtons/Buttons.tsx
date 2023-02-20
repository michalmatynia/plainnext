import React, { ReactNode, Ref, forwardRef } from 'react'

import { styled } from '@mui/material/styles'
import buttonStyle from '../,,/../../../../styles/jss/nextjs-material-kit/components/buttonStyle.js'
import { ExtendedAllowedColor } from 'types/styleTypes/nextjs-material-kit/colors'
import Button from '@mui/material/Button'

interface Props {
  ct_color?: ExtendedAllowedColor
  ct_size?: 'sm' | 'lg'
  simple?: boolean
  round?: boolean
  fullWidth?: boolean
  disabled?: boolean
  block?: boolean
  link?: boolean
  justIcon?: boolean
  className?: string
  children?: ReactNode
  href?: string
  target?: string
  rel?: string
}
type BtnClassesProps = Omit<Props, 'children'>

const StyledCustomButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== 'ct_color' &&
    prop !== 'ct_size' &&
    prop !== 'simple' &&
    prop !== 'round' &&
    prop !== 'fullWidth' &&
    prop !== 'disabled' &&
    prop !== 'block' &&
    prop !== 'link' &&
    prop !== 'justIcon',
})<Omit<Props, 'className' | 'children' | 'href' | 'target' | 'rel'>>(
  ({
    ct_color,
    ct_size,
    simple,
    round,
    fullWidth,
    disabled,
    block,
    link,
    justIcon,
  }) => {
    let stylesToApplyColor = {}

    switch (ct_color) {
      case 'primary':
        stylesToApplyColor = { ...stylesToApplyColor, ...buttonStyle.primary }
        break
      case 'info':
        stylesToApplyColor = { ...stylesToApplyColor, ...buttonStyle.info }
        break
      case 'success':
        stylesToApplyColor = { ...stylesToApplyColor, ...buttonStyle.success }
        break
      case 'warning':
        stylesToApplyColor = { ...stylesToApplyColor, ...buttonStyle.warning }
        break
      case 'danger':
        stylesToApplyColor = { ...stylesToApplyColor, ...buttonStyle.danger }
        break
      case 'rose':
        stylesToApplyColor = { ...stylesToApplyColor, ...buttonStyle.rose }
        break
      case 'transparent':
        stylesToApplyColor = {
          ...stylesToApplyColor,
          ...buttonStyle.transparent,
        }
        break
      case 'white':
        stylesToApplyColor = { ...stylesToApplyColor, ...buttonStyle.white }
        break
      case 'facebook':
        stylesToApplyColor = { ...stylesToApplyColor, ...buttonStyle.facebook }
        break
      case 'twitter':
        stylesToApplyColor = { ...stylesToApplyColor, ...buttonStyle.twitter }
        break
      case 'google':
        stylesToApplyColor = { ...stylesToApplyColor, ...buttonStyle.google }
        break
      case 'github':
        stylesToApplyColor = { ...stylesToApplyColor, ...buttonStyle.github }
        break
    }

    switch (ct_size) {
      case 'sm':
        stylesToApplyColor = { ...stylesToApplyColor, ...buttonStyle.sm }
        break
      case 'lg':
        stylesToApplyColor = { ...stylesToApplyColor, ...buttonStyle.lg }
        break
    }
    return {
      ...(simple && {
        ...buttonStyle.simple,
      }),
      ...(round && {
        ...buttonStyle.round,
      }),
      ...(fullWidth && {
        ...buttonStyle.fullWidth,
      }),
      ...(disabled && {
        pointerEvents: 'none',
        ...buttonStyle.disabled,
      }),
      ...(block && {
        ...buttonStyle.block,
      }),
      ...(link && {
        ...buttonStyle.link,
      }),
      ...(justIcon && {
        ...buttonStyle.justIcon,
      }),
      ...stylesToApplyColor,
    }
  }
)

const RegularButton = forwardRef(function RegularButton(
  props: Props,
  ref: Ref<HTMLButtonElement>
) {
  const {
    ct_color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    ct_size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props

  const btnClasses: BtnClassesProps = {
    ct_color,
    round,
    fullWidth,
    disabled,
    simple,
    ct_size,
    block,
    link,
    justIcon,
    className,
  }

  return (
    <StyledCustomButton {...rest} ref={ref} {...btnClasses}>
      {children}
    </StyledCustomButton>
  )
})

export default RegularButton
