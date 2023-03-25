import 'styles/tailwind.css'

import { ModalProvider, ToastProvider } from '@apideck/components'

import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ToastProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ToastProvider>
  )
}
