import { createContext } from 'react';
import { type User } from '../types/user'
export const UserListContext = createContext<[User[], React.Dispatch<React.SetStateAction<User[]>>] | null>(null);
