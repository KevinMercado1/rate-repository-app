import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import SignInContainer from '../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const mockOnSubmit = jest.fn();

      render(<SignInContainer onSubmit={mockOnSubmit} />);

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'testuser');
      fireEvent.changeText(
        screen.getByPlaceholderText('Password'),
        'password123'
      );

      fireEvent.press(screen.getByText('Submit'));

      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(mockOnSubmit).toHaveBeenCalledWith({
          username: 'testuser',
          password: 'password123',
        });
      });
    });
  });
});
