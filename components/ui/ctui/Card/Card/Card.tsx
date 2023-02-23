/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC, ReactNode } from 'react'

import styles from '../../../../../styles/jss/nextjs-material-kit/components/cardStyle.js'
interface Props {
  plain?: boolean
  carousel?: boolean
  className?: CSSProperties
  children?: ReactNode
}

const CT_Card: FC<Props> = (props): React.ReactElement => {
  const cardStyle = css({
    ...(styles.card as CSSProperties),
    ...((props.plain && {
      ...styles.cardPlain,
    }) as CSSProperties),
    ...((props.carousel && {
      ...styles.cardCarousel,
    }) as CSSProperties),
    ...(props.className !== undefined && {
      ...props.className,
    }),
  })
  return <div css={cardStyle}>{props.children}</div>
}

export default CT_Card
