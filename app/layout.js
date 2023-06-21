import Nav from './Components/Nav/nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Almirante Turismo',
  description: 'Site de turismo para a cidade de almiramnte tamandaré',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
        <Footer className='footer'/>
    </html>
  )
}
