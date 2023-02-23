import React, { CSSProperties, FC, ReactNode } from 'react'
import { FormControl, InputLabel, Input } from '@mui/material'

import styles from '../../../..//styles/jss/nextjs-material-kit/components/customInputStyle.js'

interface Props {
  labelText?: ReactNode
  labelProps?: object
  id?: string
  formControlProps?: object
  inputRootCustomClasses?: object
  error?: boolean
  success?: boolean
  white?: boolean
  styleProps?: object
  formControlClasses?: string
  inputProps?: object
}

const CT_CustomInput: FC<Props> = (props): React.ReactElement => {
  const {
    styleProps,
    error,
    success,
    formControlProps,
    labelText,
    labelProps,
    id,
    white,
    inputRootCustomClasses,
    inputProps,
  } = props

  const labelClasses = {
    ...(error && styles.labelRootError),
    ...(success && !error && styles.labelRootSuccess),
  }

  const underlineClasses = {
    ...(error && styles.underlineError),
    ...(success && !error && styles.underlineSuccess),
    ...(styles.underlined as CSSProperties),
    ...(white && styles.whiteUnderline),
  }

  const marginTop = {
    ...(inputRootCustomClasses !== undefined && inputRootCustomClasses),
  }

  const inputClasses = {
    ...styles.input,
    ...(white && styles.whiteInput),
  }

  const inputSX = {
    input: { ...inputClasses },
    root: marginTop,
    disabled: styles.disabled,
    underline: underlineClasses,
  }

  let formControlClasses = {}
  if (formControlProps !== undefined && 'className' in formControlProps) {
    formControlClasses = {
      ...(formControlProps.className as CSSProperties),
      ...(styles.formControl as CSSProperties),
    }
  } else {
    formControlClasses = styles.formControl
  }
  return (
    <FormControl
      sx={{ ...styleProps, ...formControlClasses }}
      {...formControlProps}
    >
      {labelText !== undefined ? (
        <InputLabel
          sx={{ ...(styles.labelRoot as CSSProperties), ...labelClasses }}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        // classes={{
        //   input: { ...inputClasses },
        //   //   root: marginTop,
        //   //   disabled: styles.disabled,
        //   //   underline: underlineClasses,
        // }}
        sx={{ ...inputSX }}
        fullWidth
        id={id}
        {...inputProps}
      />
    </FormControl>
  )
}

export default CT_CustomInput
