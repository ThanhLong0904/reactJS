import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box, FormControl, FormHelperText, IconButton, OutlinedInput, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

function QuantityField(props) {
  const { name, label, form } = props;
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = form;

  const hasError = !!errors[name];

  const handleIncrease = () => {
    const currentValue = Number(getValues(name) || 0); // Lấy giá trị hiện tại
    setValue(name, currentValue + 1); // Tăng 1
  };

  const handleDecrease = () => {
    const currentValue = Number(getValues(name) || 0); // Lấy giá trị hiện tại
    setValue(name, Math.max(currentValue - 1, 0)); // Giảm 1, tối thiểu là 0
  };

  return (
    <FormControl margin="normal" variant="outlined" fullWidth error={hasError} size="small">
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <Box display="flex" alignItems="center" maxWidth="150px">
              <IconButton onClick={handleDecrease}>
                <RemoveCircleOutlineIcon />
              </IconButton>
              <OutlinedInput
                {...field}
                id={name}
                type="number"
                value={field.value || 1} // Đảm bảo giá trị không bị undefined
              />
              <IconButton onClick={handleIncrease}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
          );
        }}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
