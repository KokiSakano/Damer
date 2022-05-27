import { FC, ReactNode } from 'react';
import { Head } from '../Head';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head />
      <main>{children}</main>
    </>
  );
};
