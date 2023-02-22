import React, { CSSProperties, FC, ReactNode } from 'react'

import Grid, { GridProps } from '@mui/material/Grid'

interface Props extends GridProps {
  children?: ReactNode
  className?: string
  styleProps?: CSSProperties
}

const styles = {
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto',
  },
}

const CT_GridContainer: FC<Props> = (props): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, className, styleProps, ...rest } = props
  return (
    <Grid container {...rest} sx={{ ...styles.grid, ...styleProps }}>
      {children}
    </Grid>
  )
}

export default CT_GridContainer
