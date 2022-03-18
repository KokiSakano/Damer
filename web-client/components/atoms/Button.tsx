import { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }): JSX.Element => <button>{children}</button>;

export default Button;
