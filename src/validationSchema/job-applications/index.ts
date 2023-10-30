import * as yup from 'yup';

export const jobApplicationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  applied_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
  job_id: yup.string().nullable().required(),
});
