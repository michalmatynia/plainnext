import React, { FC, ReactNode } from 'react'

import Grid from '@mui/material/Grid'

interface Props {
  children?: ReactNode
  className?: string
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
  const { children, className, ...rest } = props
  return (
    <Grid container {...rest} sx={{ ...styles.grid }}>
      {children}
    </Grid>
  )
}

export default CT_GridContainer
