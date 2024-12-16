import { Grid2, Box, Stepper, Step, StepLabel, Stack, Typography, Button } from "@mui/material";
import { Dayjs } from "dayjs";
import React from "react";
import Review from "../Review";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import FirstStep from "./component/FirstStep";
import SecondStep from "./component/SecondStep";
import { useSnackbar } from '../../../Context/Snackbar';
import { checkInquiry } from "../../services/api";

const steps = ['證書查詢', '查詢結果'];


export default function MainForm() {
  const { showSnackbar } = useSnackbar(); // 使用 useSnackbar 獲取 showSnackbar
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    userName: '',
    snNumber: '',
    issueDate: null as Dayjs | null,
    expiryDate: null as Dayjs | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name: string) => (newValue: Dayjs | null) => {
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    showSnackbar('測試', 'success');


    // 驗證邏輯
    const { userName, snNumber, issueDate, expiryDate } = formData;
    if (!userName || !snNumber || !issueDate || !expiryDate) return;

    const dataToSubmit = {
      ...formData,
      issueDate: issueDate?.toISOString(),
      expiryDate: expiryDate?.toISOString(),
    };


    try {
      const data = await checkInquiry(dataToSubmit);
      console.log('Success:', data);
      showSnackbar('提交成功！', 'success');
      handleNext();
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error);
        showSnackbar('發生錯誤: ' + error.message, 'error');
      } else {
        console.error('Unexpected error:', error);
        showSnackbar('發生未知錯誤', 'error');
      }
    }
  }

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <FirstStep
          formData={formData}
          handleChange={handleChange}
          handleDateChange={handleDateChange}
          onSubmit={handleSubmit}
        />;
      case 1:
        return <SecondStep />;
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };



  return <Grid2 size={{ xs: 12, md: 8 }}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: { xs: '100%', md: '800px' },
      width: '100%',
      backgroundColor: { xs: 'transparent', sm: 'background.default' },
      alignItems: 'start',
      pt: { xs: 8, md: 16 },
      px: { xs: 2, md: 10 },
      gap: { xs: 4, md: 8 },
    }}
  >
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Stepper
        id="desktop-stepper"
        activeStep={activeStep}
        sx={{
          width: '100%', height: 40,
          display: { xs: 'none', md: 'flex' },
        }}
      >
        {steps.map((label) => (
          <Step
            sx={{ ':first-of-type': { pl: 0 }, ':last-child': { pr: 0 } }}
            key={label}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stepper
        id="mobile-stepper"
        activeStep={activeStep}
        alternativeLabel
        sx={{ display: { sm: 'flex', md: 'none' } }}
      >
        {steps.map((label) => (
          <Step
            sx={{
              ':first-of-type': { pl: 0 },
              ':last-child': { pr: 0 },
              '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
            }}
            key={label}
          >
            <StepLabel
              sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    {activeStep === steps.length ? (
      <Stack spacing={2} useFlexGap>
        <Typography variant="h1">📦</Typography>
        <Typography variant="h5">Thank you for your order!</Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Your order number is
          <strong>&nbsp;#140396</strong>. We have emailed your order
          confirmation and will update you once its shipped.
        </Typography>
        <Button
          variant="contained"
          sx={{ alignSelf: 'start', width: { xs: '100%', sm: 'auto' } }}
        >
          Go to my orders
        </Button>
      </Stack>
    ) : (
      <>



        {getStepContent(activeStep)}
        <Box
          sx={[
            {
              display: 'flex',
              width: '100%',
              gap: 1,
              pb: { xs: 12, sm: 0 },
              mt: { xs: 2, sm: 0 },
              mb: '60px',
            },
            // activeStep !== 0
            //   ? { justifyContent: 'space-between' }
            //   : { justifyContent: 'flex-end' },
          ]}
        >
          {activeStep !== 0 && (
            <Button
              variant="contained"
              color="secondary"
              startIcon={<ChevronLeft />}
              onClick={handleBack}
              sx={{ width: { xs: '100%', sm: 'fit-content' } }}
            >
              返回
            </Button>
          )}

          {activeStep !== steps.length - 1 && (
            <Button
              variant="contained"
              endIcon={<ChevronRight />}
              // onClick={handleNext}
              onClick={handleSubmit}
              sx={{ width: { xs: '100%', sm: 'fit-content' } }}
            >
              下一步
            </Button>
          )}

        </Box>
      </>
    )}
  </Grid2>
}