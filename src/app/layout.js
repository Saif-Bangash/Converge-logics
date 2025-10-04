import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "./globals.css";
 

export const metadata = {
  title: "Convergelogics",
  description: "Convergelogics Convergelogics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />   
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
