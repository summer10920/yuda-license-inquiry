import { graphql, HttpResponse } from 'msw'


export const handlersInquiry = [
  graphql.mutation(`SubmitInquiry`, ({ variables }) => {
    const { userName, snNumber, issueDate, expiryDate } = variables.data;

    return HttpResponse.json({
      data: {
        submitInquiry: {
          success: 'ok',
          message: null,
          res: {
            id: 1,
            name: userName,
            phone: '0933-33-33-33',
            sn: snNumber,
            issueDate,
            expiryDate,
          },
        }
      }
    })
  }),
];