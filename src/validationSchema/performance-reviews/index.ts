import * as yup from 'yup';

export const performanceReviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comments: yup.string().nullable(),
  reviewed_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
  reviewer_id: yup.string().nullable().required(),
});
