import React, { FC, ReactNode } from 'react'
import { CreativeTimAppBar } from '@components/ui'

const dashboardRoutes = []

export default function LandingPage(props: FC): ReactNode {
  const { ...rest } = props
  return (
    <>
      <CreativeTimAppBar
        color="transparent"
        brand="NextJS Material Kit"
        // rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
    </>
  )
}
