import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonSecondary, GradientButton } from './button.style';
import Text from '../text/Text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
}

const Button = ({ title, margin, type, ...props }: ButtonProps) => {
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary margin={margin} {...props}>
          <Text type={textTypes.BUTTON_BOLD} color={theme.colors.mainTheme.primary}>
            {title}
          </Text>
        </ButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonContainer margin={margin} {...props}>
          <GradientButton
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>
              {title}
            </Text>
          </GradientButton>
        </ButtonContainer>
      );
  }
};

export default Button;
