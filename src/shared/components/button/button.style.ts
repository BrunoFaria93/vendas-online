import styled from 'styled-components/native';
import { theme } from '../../themes/theme';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin}` : '')};
  background-color: blue;
`;

export const GradientButton = styled(LinearGradient)<ButtonContainerProps>`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin}` : '')};
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin}` : '')};
  background-color: transparent;
  border-width: 1px;
  border-color: ${theme.colors.mainTheme.primary};
`;
