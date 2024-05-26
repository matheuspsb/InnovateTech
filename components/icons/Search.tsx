import Svg, { Path, SvgProps } from 'react-native-svg';

export const Search = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
      stroke="#6C9476"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.4434 16.4438L20.9997 21.0002"
      stroke="#6C9476"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);