import carImage from '../../images/car-svg.svg'
import discoverImage from '../../images/discover.svg'
import teamImage from '../../images/team.svg'
export const homeObjOne = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Primium Bank',
  headline: 'Ultimited transitions with zero fees',
  description: 'Get access to our exclusive app that allow you to send unlimited trasactions without getting charged any fees.',
  buttonLavel: 'Get started',
  imgStart: false,
  img: carImage,
  alt: 'Car',
  dark: true,
  primary: false,
  darkText: false
}
export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Ultimited transitions with zero fees',
  description: 'Get access to our exclusive app that allow you to send unlimited trasactions without getting charged any fees.',
  buttonLavel: 'Get started',
  imgStart: true,
  img: discoverImage,
  alt: 'Discover',
  dark: false,
  primary: true,
  darkText: true
}
export const homeObjThree = {
  id: 'signup',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Join our team',
  headline: 'Create an account is extremely  easy',
  description: 'Get everything set up and ready in under 10 minites. All you need to do is add your information and you\'re ready to go',
  buttonLavel: 'Start Now',
  imgStart: false,
  img: teamImage,
  alt: 'Team',
  dark: true,
  primary: true,
  darkText: false
}