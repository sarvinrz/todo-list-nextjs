import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/utils/i18';
import { Provider } from 'react-redux';
import { store } from '@/store';
import ContentLayout from '@/layouts/ContentLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>todo list</title>
        <link rel='todo-icon' href='/todo.png' />
      </Head>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <ContentLayout />
        </I18nextProvider>
      </Provider>
    </>
  );
}
