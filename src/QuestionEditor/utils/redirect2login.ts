import { encodeJsonToBase64URL } from './encodeAndDecodeUrl';

export default function redirect2login() {
  // getDvaApp()._store.dispatch({
  //   type: 'login/logout',
  //   payload: {
  //     redirect: redirectUrl,
  //   },
  // });
  // 如果当前时登录页，则不跳转
  if (location.pathname === '/user/login') {
    return;
  }
  const redirectUrl = encodeJsonToBase64URL(JSON.stringify(location.pathname + location.search));

  (window as any).g_app._store.dispatch({
    type: 'login/logout',
    payload: {
      redirect: redirectUrl,
    },
  });
}
