import { fireEvent, render } from '@testing-library/react-native';
import LoginScreen from '../app/index';

const mockPush = jest.fn();
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('Teste de DS - Tela de Login', () => {
  it('Deve preencher os campos e navegar ao clicar em login', () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);

    const inputNome = getByPlaceholderText('Digite seu nome');
    const inputSenha = getByPlaceholderText('Digite sua senha');
    const inputConfirmarSenha = getByPlaceholderText('Confirme sua senha');

    fireEvent.changeText(inputNome, 'Aluno DS');
    fireEvent.changeText(inputSenha, '123456');
    fireEvent.changeText(inputConfirmarSenha, '123456');

    const botaoLogin = getByText('LOGIN');
    fireEvent.press(botaoLogin);

    expect(mockPush).toHaveBeenCalled();
  });
});