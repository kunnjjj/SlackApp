import { createContext } from 'react';
import { type User } from '../typescriptTypes/user'
export const CurrentUserContext = createContext<User | null>(null);
