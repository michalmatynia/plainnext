/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'

import { InfoAreaColor } from 'types/styleTypes/nextjs-material-kit/colors'
import styles from '../../../../styles/jss/nextjs-material-kit/components/infoStyle.js'
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon.js'
interface Props {
  iconColor?: InfoAreaColor
  description?: string
  title?: string
  icon?: React.ElementType<SvgIconProps>
  vertical?: boolean
}
const CT_InfoArea: FC<Props> = (props): React.ReactElement => {
  const { title, description, iconColor = 'gray', vertical } = props

  const iconWrapper = css({
    ...((vertical && {
      ...styles.iconWrapperVertical,
    }) as CSSProperties),
    ...styles[iconColor],
    ...(styles.iconWrapper as CSSProperties),
  })
  const iconClasses = {
    ...styles.icon,
    ...((vertical && {
      ...styles.iconVertical,
    }) as CSSProperties),
  }

  const styleTitle = css({
    ...(styles.title as CSSProperties),
  })

  return (
    <div css={styles.infoArea}>
      <div css={iconWrapper}>
        <props.icon sx={iconClasses} />
      </div>
      <div css={styles.descriptionWrapper}>
        <h4 css={styleTitle}>{title}</h4>
        <p css={styles.description}>{description}</p>
      </div>
    </div>
  )
}
export default CT_InfoArea
