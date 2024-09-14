import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginFrom';

function Login(props) {
  const { closeDialog } = props;

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (value) => {
    try {
      const action = login(value);
      await dispatch(action).unwrap();
      if (closeDialog) {
        closeDialog();
      }
    } catch (err) {
      console.log('failed to login', err);
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
