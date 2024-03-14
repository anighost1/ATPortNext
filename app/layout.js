import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Anil Tigga",
    description: "Portfolio of Anil Tigga",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-34ZKZDYGXQ"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'G-34ZKZDYGXQ');
                `}
            </Script>
            <body className={inter.className}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
