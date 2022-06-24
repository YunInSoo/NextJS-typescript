import React, { FC, ReactNode } from 'react';

type AppLayoutProps = {
  children?: ReactNode;
};

const LayoutTheme: FC<AppLayoutProps> = ({ children }) => <div>123123{children}</div>;
export default LayoutTheme;
