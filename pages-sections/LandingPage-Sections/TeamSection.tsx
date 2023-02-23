/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'

import styles from '../../styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle'
import {
  CT_Card,
  CT_CardBody,
  CT_CardFooter,
  CT_CustomButton,
  CT_GridContainer,
  CT_GridItem,
} from '@components/ui'

const SectionStyle = css({
  ...(styles.section as CSSProperties),
})
const TitleStyle = css({ ...(styles.title as CSSProperties) })
const CardTitleStyle = css({ ...(styles.cardTitle as CSSProperties) })
const SmallTitleStyle = css({ ...(styles.smallTitle as CSSProperties) })
const DescriptionStyle = css({ ...(styles.description as CSSProperties) })
const SocialsStyle = css({ ...(styles.socials as CSSProperties) })

const imageClasses = css({
  ...(styles.imgRaised as CSSProperties),
  ...(styles.imgRoundedCircle as CSSProperties),
  ...(styles.imgFluid as CSSProperties),
})
const CT_TeamSection: FC = (): React.ReactElement => {
  return (
    <div css={SectionStyle}>
      <h2 css={TitleStyle}>Here is our team</h2>
      <div>
        <CT_GridContainer>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_Card plain>
              <CT_GridItem
                xs={12}
                sm={12}
                md={6}
                styleProps={styles.itemGrid as CSSProperties}
              >
                <img src="/img/faces/avatar.jpg" alt="..." css={imageClasses} />
              </CT_GridItem>
              <h4 css={CardTitleStyle}>
                Gigi Hadid
                <br />
                <small css={SmallTitleStyle}>Model</small>
              </h4>
              <CT_CardBody>
                <p css={DescriptionStyle}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CT_CardBody>
              <CT_CardFooter styleProps={styles.justifyCenter as CSSProperties}>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5 as CSSProperties}
                >
                  <i css={SocialsStyle} className={'fab fa-twitter'} />
                </CT_CustomButton>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5 as CSSProperties}
                >
                  <i css={SocialsStyle} className={'fab fa-instagram'} />
                </CT_CustomButton>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5 as CSSProperties}
                >
                  <i css={SocialsStyle} className={'fab fa-facebook'} />
                </CT_CustomButton>
              </CT_CardFooter>
            </CT_Card>
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_Card plain>
              <CT_GridItem
                xs={12}
                sm={12}
                md={6}
                styleProps={styles.itemGrid as CSSProperties}
              >
                <img
                  src="/img/faces/christian.jpg"
                  alt="..."
                  css={imageClasses}
                />
              </CT_GridItem>
              <h4 css={CardTitleStyle}>
                Christian Louboutin
                <br />
                <small css={SmallTitleStyle}>Designer</small>
              </h4>
              <CT_CardBody>
                <p css={DescriptionStyle}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CT_CardBody>
              <CT_CardFooter styleProps={styles.justifyCenter as CSSProperties}>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5 as CSSProperties}
                >
                  <i css={SocialsStyle} className={'fab fa-twitter'} />
                </CT_CustomButton>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5 as CSSProperties}
                >
                  <i css={SocialsStyle} className={'fab fa-linkedin'} />
                </CT_CustomButton>
              </CT_CardFooter>
            </CT_Card>
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_Card plain>
              <CT_GridItem
                xs={12}
                sm={12}
                md={6}
                styleProps={styles.itemGrid as CSSProperties}
              >
                <img
                  src="/img/faces/kendall.jpg"
                  alt="..."
                  css={imageClasses}
                />
              </CT_GridItem>
              <h4 css={CardTitleStyle}>
                Kendall Jenner
                <br />
                <small css={SmallTitleStyle}>Model</small>
              </h4>
              <CT_CardBody>
                <p css={DescriptionStyle}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CT_CardBody>
              <CT_CardFooter styleProps={styles.justifyCenter as CSSProperties}>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5 as CSSProperties}
                >
                  <i css={SocialsStyle} className={'fab fa-twitter'} />
                </CT_CustomButton>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5 as CSSProperties}
                >
                  <i css={SocialsStyle} className={'fab fa-instagram'} />
                </CT_CustomButton>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5 as CSSProperties}
                >
                  <i css={SocialsStyle} className={'fab fa-facebook'} />
                </CT_CustomButton>
              </CT_CardFooter>
            </CT_Card>
          </CT_GridItem>
        </CT_GridContainer>
      </div>
    </div>
  )
}

export default CT_TeamSection
