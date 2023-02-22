/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'

// import { styled } from '@mui/material/styles'
import styles from '../../styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js'
// import { ExtendedAllowedColor } from 'types/styleTypes/nextjs-material-kit/colors'
// import Button, { ButtonProps } from '@mui/material/Button'
import { CT_GridContainer, CT_GridItem } from '@components/ui'
// import { Box } from '@mui/material'

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
    </div>
  )
}

export default CT_ProductSection

// import React from "react";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";

// // @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// // core components
// import GridContainer from "/components/Grid/GridContainer.js";
// import GridItem from "/components/Grid/GridItem.js";
// import InfoArea from "/components/InfoArea/InfoArea.js";

// import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

// const useStyles = makeStyles(styles);

// export default function ProductSection() {
//   const classes = useStyles();
//   return (
//     <div className={classes.section}>
//       <GridContainer justify="center">
//         <GridItem xs={12} sm={12} md={8}>
//           <h2 className={classes.title}>Let{"'"}s talk product</h2>
//           <h5 className={classes.description}>
//             This is the paragraph where you can write more details about your
//             product. Keep you user engaged by providing meaningful information.
//             Remember that by this time, the user is curious, otherwise he wouldn
//             {"'"}t scroll to get here. Add a button if you want the user to see
//             more.
//           </h5>
//         </GridItem>
//       </GridContainer>
//       <div>
//         <GridContainer>
//           <GridItem xs={12} sm={12} md={4}>
//             <InfoArea
//               title="Free Chat"
//               description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
//               icon={Chat}
//               iconColor="info"
//               vertical
//             />
//           </GridItem>
//           <GridItem xs={12} sm={12} md={4}>
//             <InfoArea
//               title="Verified Users"
//               description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
//               icon={VerifiedUser}
//               iconColor="success"
//               vertical
//             />
//           </GridItem>
//           <GridItem xs={12} sm={12} md={4}>
//             <InfoArea
//               title="Fingerprint"
//               description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
//               icon={Fingerprint}
//               iconColor="danger"
//               vertical
//             />
//           </GridItem>
//         </GridContainer>
//       </div>
//     </div>
//   );
// }
