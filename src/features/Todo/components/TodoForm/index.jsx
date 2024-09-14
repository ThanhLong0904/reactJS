import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

function TodoForm(props) {
  const { onSubmit } = props;

  const schema = yup
    .object({
      title: yup
        .string()
        .required('Please enter your full name.')
        .test(
          'show has at least two words',
          'Please enter at least two words',
          (value) => {
            console.log(value);
            return value.split(' ').length >= 2;
          },
        ),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Title" form={form} />
    </form>
  );
}

export default TodoForm;
