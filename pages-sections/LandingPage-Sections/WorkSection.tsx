/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'

import styles from '../../styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle'
import {
  CT_Card,
  CT_CardBody,
  CT_CardFooter,
  CT_CustomButton,
  CT_CustomInput,
  CT_GridContainer,
  CT_GridItem,
} from '@components/ui'

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

const SectionStyle = css({
  ...(styles.section as CSSProperties),
})
const CT_WorkSection: FC = (): React.ReactElement => {
  return (
    <div css={SectionStyle}>
      {' '}
      <CT_GridContainer styleProps={{ justifyContent: 'center' }}>
        <CT_GridItem xs={12} sm={12} md={8}>
          <h2 css={TitleStyle}>Work with us</h2>
          <h4 css={DescriptionStyle}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <form>
            <CT_GridContainer>
              <CT_GridItem xs={12} sm={12} md={6}>
                <CT_CustomInput
                  labelText="Your Name"
                  id="name"
                  styleProps={{
                    fullWidth: true,
                  }}
                  //   formControlProps={{
                  //     fullWidth: true,
                  //   }}
                />
              </CT_GridItem>
              <CT_GridItem xs={12} sm={12} md={6}>
                {/* <CustomInput
            labelText="Your Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
          /> */}
              </CT_GridItem>
              {/* <CustomInput
          labelText="Your Message"
          id="message"
          formControlProps={{
            fullWidth: true,
            className: classes.textArea
          }}
          inputProps={{
            multiline: true,
            rows: 5
          }}
        /> */}
              <CT_GridItem
                xs={12}
                sm={12}
                md={4}
                styleProps={styles.textCenter as CSSProperties}
              >
                {/* <Button color="primary">Send Message</Button> */}
              </CT_GridItem>
            </CT_GridContainer>
          </form>
        </CT_GridItem>
      </CT_GridContainer>
    </div>
  )
}

export default CT_WorkSection

// import React from "react";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";

// // @material-ui/icons

// // core components
// import GridContainer from "/components/Grid/GridContainer.js";
// import GridItem from "/components/Grid/GridItem.js";
// import CustomInput from "/components/CustomInput/CustomInput.js";
// import Button from "/components/CustomButtons/Button.js";

// import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

// const useStyles = makeStyles(styles);

// export default function WorkSection() {
//   const classes = useStyles();
//   return (
//     <div className={classes.section}>
//       <GridContainer justify="center">
//         <GridItem cs={12} sm={12} md={8}>
//           <h2 className={classes.title}>Work with us</h2>
//           <h4 className={classes.description}>
//             Divide details about your product or agency work into parts. Write a
//             few lines about each one and contact us about any further
//             collaboration. We will responde get back to you in a couple of
//             hours.
//           </h4>
//           <form>
//             <GridContainer>
//               <GridItem xs={12} sm={12} md={6}>
//                 <CustomInput
//                   labelText="Your Name"
//                   id="name"
//                   formControlProps={{
//                     fullWidth: true
//                   }}
//                 />
//               </GridItem>
//               <GridItem xs={12} sm={12} md={6}>
//                 <CustomInput
//                   labelText="Your Email"
//                   id="email"
//                   formControlProps={{
//                     fullWidth: true
//                   }}
//                 />
//               </GridItem>
//               <CustomInput
//                 labelText="Your Message"
//                 id="message"
//                 formControlProps={{
//                   fullWidth: true,
//                   className: classes.textArea
//                 }}
//                 inputProps={{
//                   multiline: true,
//                   rows: 5
//                 }}
//               />
//               <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
//                 <Button color="primary">Send Message</Button>
//               </GridItem>
//             </GridContainer>
//           </form>
//         </GridItem>
//       </GridContainer>
//     </div>
//   );
// }
