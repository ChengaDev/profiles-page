import * as Yup from 'yup';

export const validationSchema = () =>
    Yup.object({
        name: Yup.string().required(),
        bio: Yup.string().required(),
        fb_id: Yup.string().required()
    });
