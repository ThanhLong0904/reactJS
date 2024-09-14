import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './styles.scss';

function LoginForm(props) {
  const { onSubmit } = props;

  const schema = yup
    .object({
      identifier: yup.string().required('Please enter your email').email('please enter a valid email'),
      password: yup.string().required('Please enter your password'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className="root">
      {isSubmitting && <LinearProgress />}
      <Avatar className="avatar">
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography component="h3" variant="h5" className="title">
        Sign in
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
