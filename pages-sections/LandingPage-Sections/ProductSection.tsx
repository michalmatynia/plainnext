/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'

import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import ChatIcon from '@mui/icons-material/Chat'

import styles from '../../styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js'

import { CT_GridContainer, CT_GridItem, CT_InfoArea } from '@components/ui'
const SectionStyle = css({
  ...(styles.section as CSSProperties),
})

const TitleStyle = css({
  ...(styles.title as CSSProperties),
})

const DescriptionStyle = css({
  ...(styles.description as CSSProperties),
})
const CT_ProductSection: FC = (): React.ReactElement => {
  return (
    <div css={SectionStyle}>
      <CT_GridContainer styleProps={{ justifyContent: 'center' }}>
        <CT_GridItem xs={12} sm={12} md={8}>
          <h2 css={TitleStyle}>Let{"'"}s talk product</h2>
          <h5 css={DescriptionStyle}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </CT_GridItem>
      </CT_GridContainer>

      <div>
        <CT_GridContainer>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={ChatIcon}
              iconColor="info"
              vertical
            />
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUserIcon}
              iconColor="success"
              vertical
            />
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={FingerprintIcon}
              iconColor="danger"
              vertical
            />
          </CT_GridItem>
        </CT_GridContainer>
      </div>
    </div>
  )
}

export default CT_ProductSection
