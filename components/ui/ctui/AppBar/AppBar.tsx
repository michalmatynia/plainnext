/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect, ReactNode } from 'react'
import classNames from 'classnames'

// -------- NEW IMPORTS
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AppBar, { AppBarProps } from '@mui/material/AppBar'
import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

import MenuIcon from '@mui/icons-material/Menu'
type AllowedColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'transparent'
  | 'white'
  | 'rose'
  | 'dark'

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
  a: string
}

/* EXAMPLE CODE 
bardziej zaawansowane type
*/

// type ActionButtonProps = Omit<ButtonProps, 'variant'> & {
//   component?: ElementType,
//   [key:string]: string,
// }

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
  wariant?: boolean
  appbar?: boolean
}
const classes = { active: `active` }

const appBarStyle = {
  display: 'flex',
  border: '0',
  borderRadius: '3px',
  padding: '0.625rem 0',
  marginBottom: '20px',
  color: '#555',
  width: '100%',
  backgroundColor: '#fff',
  boxShadow:
    '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
  transition: 'all 150ms ease 0s',
  alignItems: 'center',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  zIndex: 'unset',
}

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'wariant' && prop !== 'appbar',
})<StyledAppBarProps>(({ wariant, appbar, theme }) => ({
  ...(appbar && {
    position: 'relative',
    ...appBarStyle,
  }),
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

  console.log(props.a)

  // useEffect(() => {
  //   if (props.changeColorOnScroll) {
  //     window.addEventListener('scroll', headerColorChange)
  //   }
  //   return function cleanup() {
  //     if (props.changeColorOnScroll) {
  //       window.removeEventListener('scroll', headerColorChange)
  //     }
  //   }
  // })
  // const handleDrawerToggle = (): void => {
  //   setMobileOpen(!mobileOpen)
  // }

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
    <StyledAppBar appbar>
      <IconButton color="inherit" aria-label="open drawer">
        vdf
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
