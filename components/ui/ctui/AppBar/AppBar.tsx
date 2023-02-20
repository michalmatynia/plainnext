/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect, ReactNode, CSSProperties } from 'react'

// -------- NEW IMPORTS
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AppBar, { AppBarProps } from '@mui/material/AppBar'
import { Drawer, Hidden, IconButton, Menu, Toolbar } from '@mui/material'
import { styled } from '@mui/material/styles'
import { AllowedColor } from '../../../../types/styleTypes/nextjs-material-kit/colors'
import MenuIcon from '@mui/icons-material/Menu'
import styles from '../../../../styles/jss/nextjs-material-kit/components/headerStyle.js'
import Link from 'next/link'

interface Props {
  changeColorOnScroll?: {
    height?: number
    ct_color?: AllowedColor
  }
  ct_color?: AllowedColor
  rightLinks?: ReactNode
  leftLinks?: ReactNode
  brand?: string
  fixed?: boolean
  absolute?: boolean
}

interface StyledAppBarProps extends AppBarProps {
  appBar?: boolean
  fixed?: boolean
  absolute?: boolean
  ct_color?: AllowedColor
}
const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) =>
    prop !== 'appBar' &&
    prop !== 'absolute' &&
    prop !== 'fixed' &&
    prop !== 'ct_color',
})<StyledAppBarProps>(({ appBar, absolute, fixed, ct_color, theme }) => {
  let stylesToApplyColor = {}

  switch (ct_color) {
    case 'primary':
      stylesToApplyColor = { ...stylesToApplyColor, ...styles.primary }
      break
    case 'info':
      stylesToApplyColor = { ...stylesToApplyColor, ...styles.info }
      break
    case 'success':
      stylesToApplyColor = { ...stylesToApplyColor, ...styles.success }
      break
    case 'warning':
      stylesToApplyColor = { ...stylesToApplyColor, ...styles.warning }
      break
    case 'danger':
      stylesToApplyColor = { ...stylesToApplyColor, ...styles.danger }
      break
    case 'rose':
      stylesToApplyColor = { ...stylesToApplyColor, ...styles.rose }
      break
    case 'transparent':
      stylesToApplyColor = { ...stylesToApplyColor, ...styles.transparent }
      break
    case 'dark':
      stylesToApplyColor = { ...stylesToApplyColor, ...styles.dark }
      break
    case 'white':
      stylesToApplyColor = { ...stylesToApplyColor, ...styles.white }
      break
  }

  return {
    ...(appBar && {
      position: 'relative',
      ...styles.appBar,
    }),
    ...(fixed && {
      position: 'fixed',
      ...styles.fixed,
    }),
    ...(absolute && {
      position: 'absolute',
      ...styles.absolute,
    }),
    ...stylesToApplyColor,
  }
})

const CreativeTimAppBar: FC<Props> = (
  props
): React.ReactElement<AppBarProps> => {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange)
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange)
      }
    }
  })
  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen)
  }

  const headerColorChange = () => {
    const { ct_color, changeColorOnScroll } = props

    const DynamicHeaderStyle = css(styles[ct_color])
    const DynamicHeaderStyleOnScroll = css(styles[changeColorOnScroll.ct_color])

    const windowsScrollTop = window.pageYOffset
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(DynamicHeaderStyle.toString())
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(DynamicHeaderStyleOnScroll.toString())
    } else {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(DynamicHeaderStyle.toString())
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(DynamicHeaderStyleOnScroll.toString())
    }
  }
  const { ct_color, rightLinks, leftLinks, brand, fixed, absolute } = props
  const brandComponent = (
    <Link href="/components" as="/components">
      <Button sx={styles.title as CSSProperties}>{brand}</Button>
    </Link>
  )

  return (
    <StyledAppBar appBar>
      <Toolbar sx={styles.container as CSSProperties}>
        {leftLinks !== undefined ? brandComponent : null}
        <Box sx={styles.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </Box>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          sx={{
            paper: styles.drawerPaper as CSSProperties,
          }}
          onClose={handleDrawerToggle}
        >
          <Box sx={styles.appResponsive}>
            {leftLinks}
            {rightLinks}
          </Box>
        </Drawer>
      </Hidden>
    </StyledAppBar>
  )
}

export default CreativeTimAppBar
