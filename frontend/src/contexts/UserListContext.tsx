import { createContext } from 'react';
import { type User } from '../typescriptTypes/user'
export const UserListContext = createContext<[User[], React.Dispatch<React.SetStateAction<User[]>>] | null>(null);
