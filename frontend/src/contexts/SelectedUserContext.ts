import { createContext } from 'react';
import { type User } from '../typescriptTypes/user'
export const SelectedUserContext = createContext<[User, React.Dispatch<React.SetStateAction<User>>] | null>(null);
