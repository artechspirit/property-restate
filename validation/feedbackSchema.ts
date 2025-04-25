import * as yup from "yup";

export const feedbackSchema = yup.object({
  unit: yup.string().required("Unit wajib diisi"),
  id_category: yup.string().required("Kategori wajib dipilih"),
  id_sub_category: yup.string().required("Sub kategori wajib dipilih"),
  keluhan: yup.string().required("Feedback wajib diisi"),
});
