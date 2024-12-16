import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react';
import { FirstStepProps } from '../../../models/inquiry-mainForm.model';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));


export default function FirstStep({
  formData,
  handleChange,
  handleDateChange,
  onSubmit
}: FirstStepProps) {

  const [touched, setTouched] = useState({
    userName: false,
    snNumber: false,
    issueDate: false,
    expiryDate: false,
  });

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  return (
    <form onSubmit={onSubmit}    >
      <Grid container spacing={5}
      >
        <FormGrid size={{ xs: 12, md: 6 }}>
          <TextField
            id="user-name"
            name="userName"
            label="姓名"
            variant="outlined"
            required
            value={formData.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.userName && !formData.userName}
          />
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <TextField id="sn-number"
            label="證書編號"
            name="snNumber"
            variant="outlined"
            required
            value={formData.snNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.snNumber && !formData.snNumber}
          />
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ position: 'relative' }}
              label="簽發日期"
              name="issueDate"
              format="YYYY/MM/DD"
              value={formData.issueDate}
              onChange={handleDateChange('issueDate')}
              slotProps={{
                textField: {
                  required: true,
                  onBlur: handleBlur,
                  error: touched.issueDate && !formData.issueDate,
                },
              }}
            />
          </LocalizationProvider>
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="到期日"
              name="expiryDate"
              format="YYYY/MM/DD"
              value={formData.expiryDate}
              onChange={handleDateChange('expiryDate')}
              slotProps={{
                textField: {
                  required: true,
                  onBlur: handleBlur,
                  error: touched.expiryDate && !formData.expiryDate,
                },
              }}
            />
          </LocalizationProvider>
        </FormGrid>
      </Grid>
    </form>
  );
}
