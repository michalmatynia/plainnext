/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect, ReactNode, CSSProperties } from 'react'
import classNames from 'classnames'

// -------- NEW IMPORTS
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AppBar, { AppBarProps } from '@mui/material/AppBar'
import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { AllowedColor } from '../../../../types/styleTypes/nextjs-material-kit/colors'
import MenuIcon from '@mui/icons-material/Menu'
import styles from '../../../../styles/jss/nextjs-material-kit/components/headerStyle.js'

interface Props {
  changeColorOnScroll?: {
    height?: number
    color?: AllowedColor
  }
  color?: AllowedColor
  rightLinks?: ReactNode
  leftLinks?: ReactNode
  brand?: string
  fixed?: boolean
  absolute?: boolean
}

/* EXAMPLE CODE */
// const CustomSlider = styled(Slider)({
//   width: 300,
//   color: 'var(--color)',
//   '& .MuiSlider-thumb': {
//     [`&:hover, &.Mui-focusVisible`]: {
//       boxShadow: '0px 0px 0px 8px var(--box-shadow)',
//     },
//     [`&.Mui-active`]: {
//       boxShadow: '0px 0px 0px 14px var(--box-shadow)',
//     },
//   },
// });

interface StyledAppBarProps extends AppBarProps {
  appBar?: boolean
  fixed?: boolean
  absolute?: boolean
}
const classes = { appBar: `appBar` }

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) =>
    prop !== 'appBar' &&
    prop !== 'absolute' &&
    prop !== 'fixed' &&
    prop !== 'color',
})<StyledAppBarProps>(({ appBar, absolute, fixed, color, theme }) => ({
  // ...(appBar && {
  //   [`& .${classes.appBar}`]: {
  //     position: 'relative',
  //     color: 'blue',
  //     // ...styles.appBar,
  //   },
  // }),
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
  ...(color === 'primary' && { ...styles.primary }),
  ...(color === 'info' && { ...styles.info }),
  ...(color === 'primary' && { ...styles.primary }),
  ...(color === 'primary' && { ...styles.primary }),

  // [`& .${classes.active}`]: {
  //   color: theme.palette.action.hover,
  //   '& hover': {
  //     color: 'green',
  //   },
  // },
}))

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
    const { color, changeColorOnScroll } = props
    const windowsScrollTop = window.pageYOffset
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[color])
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[changeColorOnScroll.color])
    } else {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[color])
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[changeColorOnScroll.color])
    }
  }
  // const { color, rightLinks, leftLinks, brand, fixed, absolute } = props

  // const buttonStyle = {}

  // --------
  // const appBarClasses = classNames({
  //   [classes.appBar]: true,
  //   [classes[color]]: color,
  //   [classes.absolute]: absolute,
  //   [classes.fixed]: fixed,
  // })

  // const brandComponent = (
  //   <Link href="/components" as="/components">
  //     <Button className={classes.title}>{brand}</Button>
  //   </Link>
  // )

  // If a="zolty" apply styles
  return (
    <StyledAppBar appBar>
      <IconButton color="inherit" aria-label="open drawer">
        <MenuIcon />
      </IconButton>
    </StyledAppBar>
  )
  // return <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
}

// export default function AppBar(props) {

//   return (
//     <AppBar className={appBarClasses}>
//       <Toolbar className={classes.container}>
//         {leftLinks !== undefined ? brandComponent : null}
//         <div className={classes.flex}>
//           {leftLinks !== undefined ? (
//             <Hidden smDown implementation="css">
//               {leftLinks}
//             </Hidden>
//           ) : (
//             brandComponent
//           )}
//         </div>
//         <Hidden smDown implementation="css">
//           {rightLinks}
//         </Hidden>
//         <Hidden mdUp>

//         </Hidden>
//       </Toolbar>
//       <Hidden mdUp implementation="js">
//         <Drawer
//           variant="temporary"
//           anchor={'right'}
//           open={mobileOpen}
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//           onClose={handleDrawerToggle}
//         >
//           <div className={classes.appResponsive}>
//             {leftLinks}
//             {rightLinks}
//           </div>
//         </Drawer>
//       </Hidden>
//     </AppBar>
//   )
// }

// Header.defaultProp = {
//   color: 'white',
// }

export default CreativeTimAppBar
