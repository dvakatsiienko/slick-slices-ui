/* Core */
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

/* Helpers */
export const schema: yup.SchemaOf<FormShape> = yup.object({
    name:  yup.string().required('required'),
    email: yup.string().email('must be valid email').required('required'),
});

/* Types */
export interface FormShape {
    name: string;
    email: string;
}

export const resolver = yupResolver(schema);
