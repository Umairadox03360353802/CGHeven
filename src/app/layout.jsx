
import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";
import { url } from "inspector";



export const metadata = {
  title: "CG HEVEN",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  
}
) {
  return (
    <html lang="en">
      <body
        className=' bg-gray-900  ' 
      >
        <Navbar/>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
