import '../styles/globals.css';
import type { AppProps } from 'next/app';

import SelectLayout from '../components/layout/temp/SelectLayout';
import wrapper from '../store/configureStore';
import { useState } from 'react';
function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const [selectLayout, setSelectLayout] = useState();

  return <SelectLayout {...{ selectLayout, setSelectLayout, Component, pageProps }} />;
}

export default MyApp;
// export default wrapper.withRedux(MyApp);
