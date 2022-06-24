// import Loader from '../components/common/Antd/Loader/Loader';
import React, { FC, ReactElement, ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BlankNav from '@components/layout/temp/BlankNav';
import LayoutTheme from '@components/layout/temp/LayoutTheme';

// import { LayoutTheme as BlankNav } from '@components/layout/layout/BlankNav';
// import { LayoutTheme } from '@components/layout/layout';
interface DataSelectLayoutType {
  selectLayout: any;
  setSelectLayout: any;
  Component: any;
  pageProps: any;
}
const SelectLayout: FC<DataSelectLayoutType> = ({ selectLayout, setSelectLayout, Component, pageProps }) => {
  const router = useRouter();
  const [routerLoading, setRouterLoading] = useState(false); //Layout 변경되는 부분
  const LayoutContext = selectLayout ? BlankNav : LayoutTheme;

  const callbackPageLoading = useCallback(() => {
    setRouterLoading(true);
    console.log('%c 페이지 로딩 중... ', 'background: #222; color: #bada55');
  }, []);

  const callbackPageComplete = useCallback(() => {
    setRouterLoading(false);
    console.log('%c 페이지 로딩 완료 ', 'background: #222; color: #bada55');
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart', callbackPageLoading);
    router.events.on('routeChangeComplete', callbackPageComplete);
    return () => {
      router.events.off('routeChangeStart', callbackPageLoading);
      router.events.off('routeChangeComplete', callbackPageComplete);
    };
  }, [callbackPageComplete, callbackPageLoading, router.events]);

  return (
    <LayoutContext>
      <Component {...pageProps} setSelectLayout={setSelectLayout} />
      {/* {routerLoading ? <Loader selectLayout={selectLayout} /> : <></>} */}
    </LayoutContext>
  );
};
export default SelectLayout;
