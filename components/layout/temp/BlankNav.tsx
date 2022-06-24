import React, { ReactElement, ReactNode } from 'react';

interface MyButtonProps {
  children?: ReactNode;
}
const BlankNav: React.FC<MyButtonProps> = ({ children }) => {
  return <div>{children}</div>;
};
export default BlankNav;
