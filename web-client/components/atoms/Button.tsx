import { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren<{}>): JSX.Element => <button>{children}</button>;

export default Button;
