/* EXAMPLE CODE 
bardziej zaawansowane type
*/

// type ActionButtonProps = Omit<ButtonProps, 'variant'> & {
//   component?: ElementType,
//   [key:string]: string,
// }

export type AllowedColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'transparent'
  | 'white'
  | 'rose'
  | 'dark'

export type SocialMediaAllowedColor =
  | 'facebook'
  | 'twitter'
  | 'google'
  | 'github'

export type ExtendedAllowedColor =
  | Omit<AllowedColor, 'dark'> & SocialMediaAllowedColor
