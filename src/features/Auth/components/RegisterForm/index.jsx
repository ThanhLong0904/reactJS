import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './styles.scss';
import PasswordField from 'components/form-controls/PasswordField';

function RegisterForm(props) {
  const { onSubmit } = props;

  const schema = yup
    .object({
      fullName: yup
        .string()
        .required('Please enter title')
        .test('custom-test', 'Error message if the test fails', (value) => {
          const validFullName = value.split(' ');
          return validFullName.length >= 2 && validFullName[1] !== '';
        }),
      email: yup.string().required('Please enter your email').email('please enter a valid email'),
      password: yup
        .string()
        .required('Please enter your password')
        .min(2, 'Password must be at least 8 characters long'),
      // .matches(
      //   /[a-zA-Z]/,
      //   'Password must contain both uppercase and lowercase letters',
      // )
      // .matches(/\d/, 'Password must contain a number')
      // .matches(
      //   /[!@#$%^&*(),.?":{}|<>]/,
      //   'Password must contain a special character',
      // ),
      retypePassword: yup
        .string()
        .required('Please enter your retype password')
        .oneOf([yup.ref('password')], 'Password not match'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
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
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />
        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
