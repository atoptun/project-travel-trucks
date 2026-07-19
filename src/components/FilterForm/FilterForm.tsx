import {
  Box,
  Button,
  InputAdornment,
  SvgIcon,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import {
  FormContainer,
  RadioButtonGroup,
  TextFieldElement,
  useForm,
} from 'react-hook-form-mui';

import MapIcon from '@/assets/icons/map.svg?react';
import {
  CAMPER_ENGINE_LABELS,
  CAMPER_FORM_LABELS,
  CAMPER_TRANSMISSION_LABELS,
} from '@/constants.ts';
import { useFilters } from '@/hooks';
import type {
  CamperEngineType,
  CamperFormType,
  CamperTransmissionType,
} from '@/types/common';

import { styles } from './FilterForm.styles';

interface FilterFormValues {
  location?: string;
  form?: CamperFormType | '';
  engine?: CamperEngineType | '';
  transmission?: CamperTransmissionType | '';
}

type FilterFormProps = {
  onClose?: VoidFunction;
};

const formOptions = Object.entries(CAMPER_FORM_LABELS).map(([id, label]) => ({
  id,
  label,
}));
const engineOptions = Object.entries(CAMPER_ENGINE_LABELS).map(
  ([id, label]) => ({ id, label }),
);
const transmissionOptions = Object.entries(CAMPER_TRANSMISSION_LABELS).map(
  ([id, label]) => ({ id, label }),
);

function FilterForm({ onClose }: FilterFormProps) {
  const { filters, setFilters } = useFilters();

  const formContext = useForm<FilterFormValues>({
    defaultValues: {
      location: '',
      form: '',
      engine: '',
      transmission: '',
    },
  });

  const { control, reset } = formContext;

  useEffect(() => {
    reset({
      location: filters.location || '',
      form: filters.form || '',
      engine: filters.engine || '',
      transmission: filters.transmission || '',
    });
  }, [filters, reset]);

  const handleSubmit = (data: FilterFormValues) => {
    const newFilter = {
      location: data.location || undefined,
      form: data.form || undefined,
      engine: data.engine || undefined,
      transmission: data.transmission || undefined,
    };
    setFilters(newFilter);
    if (onClose) onClose();
  };

  const handleClearFilters = () => {
    reset({});
    setFilters({});
    if (onClose) onClose();
  };

  return (
    <>
      <FormContainer formContext={formContext} onSuccess={handleSubmit}>
        <Box sx={styles.formContainer}>
          <Box>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                mb: 1,
                fontWeight: 500,
              }}
            >
              Location
            </Typography>

            <TextFieldElement
              name="location"
              placeholder="Location"
              fullWidth
              variant="outlined"
              control={control}
              sx={{
                pl: 0,
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start" sx={{ pl: 0 }}>
                      <SvgIcon
                        component={MapIcon}
                        inheritViewBox
                        sx={{ color: '#101828', fontSize: 20 }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          <Box sx={styles.filtersBox}>
            <Typography variant="h6" component="p" sx={{ fontWeight: 500 }}>
              Filters
            </Typography>

            <Box>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 1 }}>
                Camper form
              </Typography>

              <RadioButtonGroup
                name="form"
                options={formOptions}
                row={false}
                control={control}
              />
            </Box>

            <Box>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 1 }}>
                Engine
              </Typography>

              <RadioButtonGroup
                name="engine"
                options={engineOptions}
                row={false}
                control={control}
              />
            </Box>

            <Box>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 1 }}>
                Transmission
              </Typography>

              <RadioButtonGroup
                name="transmission"
                options={transmissionOptions}
                row={false}
                control={control}
              />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button type="submit" variant="contained" fullWidth>
              Search
            </Button>
            <Button
              type="button"
              variant="contained"
              fullWidth
              color="inherit"
              onClick={handleClearFilters}
            >
              Clear filters
            </Button>
          </Box>
        </Box>
      </FormContainer>
    </>
  );
}
export default FilterForm;
