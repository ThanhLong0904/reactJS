import { register } from 'features/Auth/userSlice';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { useSnackbar } from 'notistack';

function Register(props) {
  const { closeDialog } = props;

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (value) => {
    try {
      value.username = value.email;
      const action = register(value);
      const user = await dispatch(action).unwrap();
      console.log('user', user);
      enqueueSnackbar('This is a success message!', { variant: 'success' });
      if (closeDialog) {
        closeDialog();
      }
    } catch (err) {
      console.log('failed to register', err);
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
