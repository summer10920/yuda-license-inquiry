import { Dayjs } from 'dayjs';


export interface formData {
  userName: string;
  snNumber: string;
  issueDate: Dayjs | string;
  expiryDate: Dayjs | string;
}

export interface FirstStepProps {
  formData: {
    userName: string;
    snNumber: string;
    issueDate: Dayjs | null;
    expiryDate: Dayjs | null;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (name: string) => (newValue: Dayjs | null) => void;
  onSubmit: (event: React.FormEvent) => void;
}