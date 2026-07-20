import { Button, Card, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { FormContainer } from 'react-hook-form-mui';

import CustomFormInput from '../CustomFormInput/CustomFormInput';

interface BookingFormProps {
  camperId: string;
}

interface FormInputs {
  name: string;
  email: string;
}
function BookingForm({ camperId }: BookingFormProps) {
  const { enqueueSnackbar } = useSnackbar();

  const handleSuccess = (data: FormInputs) => {
    enqueueSnackbar(`Booking for '${data.name}' successful!`, {
      variant: 'success',
    });
    console.info('Submitting booking for camper:', camperId, data);
  };

  return (
    <Card
      elevation={0}
      sx={{
        p: { xs: 3, sm: 5, md: 5.5 },
        border: '1px solid',
        borderColor: 'custom.greyLight',
        borderRadius: '16px',
        backgroundColor: 'custom.white',
      }}
    >
      <Typography
        variant="h6"
        component="h3"
        color="textPrimary"
        sx={{ fontWeight: 600, mb: 1 }}
      >
        Book your campervan now
      </Typography>

      <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
        Stay connected! We are always ready to help you.
      </Typography>

      <FormContainer
        defaultValues={{ name: '', email: '' }}
        onSuccess={handleSuccess}
        FormProps={{
          style: { display: 'flex', flexDirection: 'column', gap: '16px' },
        }}
      >
        <CustomFormInput
          name="name"
          placeholder="Name*"
          rules={{ required: 'Please enter your full name.' }}
        />

        <CustomFormInput
          name="email"
          placeholder="Email*"
          type="email"
          rules={{
            required: 'Email is required.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
        />

        <Button
          type="submit"
          variant="pillFilled"
          fullWidth
          sx={{
            mt: 1,
          }}
        >
          Send
        </Button>
      </FormContainer>
    </Card>
  );
}
export default BookingForm;
