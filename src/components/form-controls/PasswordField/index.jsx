import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

function PasswordField(props) {
  const { form, name, label, disabled = false } = props;
  const {
    formState: { errors },
  } = form;
  const hasError = !!errors[name];

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassWord = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormControl
          margin="normal"
          variant="outlined"
          fullWidth
          error={hasError}
        >
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <OutlinedInput
            {...field}
            id={name}
            type={showPassword ? 'text' : 'password'}
            fullWidth
            label={label}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassWord}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            disabled={disabled}
          />
          <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}

export default PasswordField;
