import { TextField } from '@mui/material';
import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from 'react-hook-form';

interface CustomFormInputProps<
  T extends FieldValues,
> extends UseControllerProps<T> {
  placeholder?: string;
  type?: string;
  fullWidth?: boolean;
}

export default function CustomFormInput<T extends FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  placeholder,
  type = 'text',
  fullWidth = true,
}: CustomFormInputProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <TextField
      {...field}
      type={type}
      fullWidth={fullWidth}
      variant="outlined"
      label={error ? placeholder : undefined}
      placeholder={!error ? placeholder : undefined}
      error={!!error}
      helperText={error ? error.message : null}
      slotProps={{
        inputLabel: {
          shrink: true,
          sx: {
            color: '#E4E7EC',
            fontWeight: 500,
            fontSize: '14px',
            backgroundColor: error ? '#ffdfdf' : 'custom.white',
            px: 0.5,
          },
        },
      }}
      sx={{
        width: '100%',
        '& .MuiInputBase-root': {
          backgroundColor: error ? '#ffdfdf' : 'custom.inputs',
          borderRadius: '12px',
          py: 0.5,
          px: 1,
          transition: 'all 0.2s ease',

          '& .MuiOutlinedInput-notchedOutline': {
            border: error ? undefined : 'none',
          },

          '&:hover': {
            backgroundColor: error ? '#ffdfdf' : 'custom.inputs',
            '& .MuiOutlinedInput-notchedOutline': {
              border: error ? undefined : 'none',
            },
          },

          '&.Mui-focused': {
            backgroundColor: error ? '#ffdfdf' : 'custom.inputs',
            '& .MuiOutlinedInput-notchedOutline': {
              border: error ? undefined : 'none',
            },
          },
        },

        '& .MuiInputBase-input': {
          color: 'custom.main',
          fontSize: '16px',
          fontWeight: 400,
          '&::placeholder': {
            color: 'custom.gray',
            opacity: 0.6,
          },
        },

        '& .MuiFormHelperText-root': {
          color: 'custom.error',
          fontSize: '14px',
          fontWeight: 400,
          mx: 1,
          mt: 0,
        },
      }}
    />
  );
}
