import { GlobalProvider } from '@/context/GlobalState';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from '@/components/BootstrapClient.js';
import './globals.css'
import {PT_Sans} from 'next/font/google'

const sans = PT_Sans({
  weight: '400',
  style: ["normal"],
  subsets: ["cyrillic"]
})
const bodyClass = 'bg-body';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sans} ${bodyClass}`}>
        <GlobalProvider>
          {children}
          <BootstrapClient />
        </GlobalProvider>
      </body>
    </html>
  )
}
