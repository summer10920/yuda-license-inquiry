import { gql } from "@apollo/client";
import { API, apolloApi } from "../../../core/api";
import { formData } from "../models/inquiry-mainForm.model";

export const SUBMIT_INQUIRY = gql`
  mutation SubmitInquiry($data: InquiryInput!) {
    submitInquiry(data: $data) {
      success
      message
      res {
        id
        name
        phone
        sn
        issueDate
        expiryDate
      }
    }
  }
`;

export const checkInquiry = async (dataToSubmit: formData) => {
  return await apolloApi(`${API.inquiry}/submit`, SUBMIT_INQUIRY, dataToSubmit);
};
