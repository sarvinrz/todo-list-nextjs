import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/utils/i18';
import MainLayout from '@/layouts/ContentLayout';
import { Suspense } from 'react';
import Fallback from '@/shared/Fallback';
import { Provider } from 'react-redux';
import { store } from '@/store';

export default function Home() {
  return (
    <>
      <Head>
        <title>todo list</title>
        <link rel='todo-icon' href='/todo.png' />
      </Head>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <MainLayout>
            {/* Why using suspense? */}
            <Suspense fallback={<Fallback />}></Suspense>
          </MainLayout>
        </I18nextProvider>
      </Provider>
    </>
  );
}
