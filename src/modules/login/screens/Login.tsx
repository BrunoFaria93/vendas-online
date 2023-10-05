import { View } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import Text from '../../../shared/components/text/Text';
const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input />
        <Button margin="16px" onPress={handleOnPress} title="Entrar" />
      </ContainerLogin>
    </View>
  );
};

export default Login;
