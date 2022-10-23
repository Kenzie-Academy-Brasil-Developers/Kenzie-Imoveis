import * as yup from "yup";


const userUpdateSerializer = yup.object().shape({
  name:yup.string().notRequired(),
  email:yup.string().notRequired(),
  isAdm:yup.boolean().notRequired(),
  isActive:yup.boolean().notRequired(),
  createdAt:yup.date().notRequired(),
  updatedAt:yup.date().notRequired()
})
export default userUpdateSerializer

export const getUsersSerializer = yup.array(userUpdateSerializer);
