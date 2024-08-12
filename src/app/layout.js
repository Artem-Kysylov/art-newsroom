import { Inter, Quattrocento } from "next/font/google"
import "@/style/style.scss"

// Import components 
import { Navbar } from "@/components/navbar/Navbar"
import { Footer } from "@/components/footer/Footer"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const quattrocento = Quattrocento({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-quattrocento',
  display: 'swap',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ '--font-inter': inter.style.fontFamily, '--font-quattrocento': quattrocento.style.fontFamily }}>
      <body>
        <div className="wrapper"> 
          <Navbar/>
            {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
