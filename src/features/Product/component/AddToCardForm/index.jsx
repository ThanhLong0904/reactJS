import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import QuantityField from 'components/form-controls/QuantityField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

function AddToCardForm({ onSubmit }) {
  const schema = yup
    .object({
      quantity: yup
        .string()
        .required('Please enter quantity')
        .min(1, 'Please enter at least 1')
        .typeError('Please enter a number'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      quantity: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    console.log('handleSubmit', value);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" label="Quantity" form={form} />
      <Button type="submit" variant="contained" color="primary">
        Add to card
      </Button>
    </form>
  );
}

export default AddToCardForm;
