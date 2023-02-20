import React, { FC, useState, useEffect, ReactNode, CSSProperties } from 'react'

import { styled, useTheme } from '@mui/material/styles'

import styles from '../../../../styles/jss/nextjs-material-kit/components/parallaxStyle.js'

interface Props {
  className?: string
  filter?: boolean
  children?: ReactNode
  style?: CSSProperties
  small?: boolean
  image?: string
  // this will add a min-height of 660px on small screens
  responsive?: boolean
  theme?: object
}

const StyledParallax = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'filter' &&
    prop !== 'style' &&
    prop !== 'small' &&
    prop !== 'responsive' &&
    prop !== 'theme',
})<Props>(({ filter, style, small, responsive, theme }) => {
  const classes = styles(theme) // add this line

  return {
    ...style,
    ...(filter && {
      ...classes.filter,
    }),
    ...(small && {
      ...classes.small,
    }),
    ...(responsive &&
      theme && {
        ...classes.parallaxResponsive,
      }),
  }
})

const CreativeTimParallax: FC<Props> = (props): React.ReactElement<Props> => {
  const theme = useTheme()

  console.log(theme.breakpoints.down('md'))

  //   let windowScrollTop
  // if (window.innerWidth >= 768) {
  //   windowScrollTop = window.pageYOffset / 3;
  // } else {
  //   windowScrollTop = 0;
  // }
  const [transform, setTransform] = useState('translate3d(0,0px,0)')
  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform)
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform)
      }
    }
  })
  const resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3
    setTransform(`translate3d(0, ${windowScrollTop} px,0)`)
  }

  const { filter, children, style, image, small, responsive } = props

  return (
    <StyledParallax
      theme={theme}
      filter={filter}
      small={small}
      responsive={responsive}
      style={{
        ...style,
        backgroundImage: `url('${image}')`,
        transform: transform,
      }}
    >
      yufuyf yv yivyv iuygv
      {children}
    </StyledParallax>
  )
}

export default CreativeTimParallax
