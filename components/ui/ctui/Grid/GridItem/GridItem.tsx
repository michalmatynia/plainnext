import React, { FC, ReactNode } from 'react'

import Grid, { GridProps } from '@mui/material/Grid'

const styles = {
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto',
  },
}

interface StyledGridProps extends GridProps {
  children?: ReactNode
  className?: string
}

const CT_GridItem: FC<StyledGridProps> = (props): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, className, ...rest } = props
  return (
    <Grid item {...rest} sx={styles.grid}>
      {children}
    </Grid>
  )
}
export default CT_GridItem
