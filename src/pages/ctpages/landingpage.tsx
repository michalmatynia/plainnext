/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { FC, ReactNode } from 'react'
import {
  CT_GridContainer,
  CT_GridItem,
  CT_CustomButton,
  CreativeTimAppBar,
  CreativeTimParallax,
} from '@components/ui'
import styles from '../../..//styles/jss/nextjs-material-kit/pages/landingPage.js'

import { Box } from '@mui/material'

// const dashboardRoutes = []

export default function LandingPage(props: FC): ReactNode {
  const h1Style = css({ ...(styles.title as object) })

  const { ...rest } = props
  return (
    <>
      <CreativeTimAppBar
        ct_color="rose"
        brand="NextJS Material Kit"
        // rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          ct_color: 'dark',
        }}
        {...rest}
      />

      <CreativeTimParallax filter responsive image="/img/landing-bg.jpg">
        <Box sx={styles.container as typeof styles}>
          <CT_GridContainer>
            <CT_GridItem xs={12} sm={12} md={6}>
              <h1 css={h1Style}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <CT_CustomButton
                ct_color="danger"
                ct_size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </CT_CustomButton>
            </CT_GridItem>
          </CT_GridContainer>
        </Box>
      </CreativeTimParallax>
    </>
  )
}
