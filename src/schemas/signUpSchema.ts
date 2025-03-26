import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email('이메일 형식이 아닙니다.'),
  password: z
    .string()
    .min(8, '비밀번호는 8자 이상이어야 합니다.')
    .max(20, '비밀번호는 20자 이하여야 합니다.')
    .regex(/[a-zA-Z0-9]/, '비밀번호는 영문과 숫자를 포함해야 합니다.')
    .regex(/[!@#$%^&*]/, '비밀번호는 특수문자를 포함해야 합니다.'),
  name: z
    .string()
    .min(2, '이름은 2자 이상이어야 합니다.')
    .max(20, '이름은 20자 이하여야 합니다.'),
  phoneNumber: z
    .string()
    .regex(/^\d{3}-\d{3,4}-\d{4}$/, '전화번호 형식이 아닙니다.'),
  nickname: z.string(),
  birth: z.string(),
  address: z.string(),
  gender: z.enum(['남성', '여성']),
});
