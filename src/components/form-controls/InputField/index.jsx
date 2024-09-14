import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

function InputField(props) {
  const { form, name, label, disabled = false } = props;
  const {
    formState: { errors },
  } = form;
  const hasError = errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          margin="normal"
          label={label}
          disabled={disabled}
          error={!!hasError}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
