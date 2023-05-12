import './globals.css'
import { Josefin_Sans } from "next/font/google";

const jssans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Blog | TEAM-Developers",
  description: "We dont know what we are doing. so we just do...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jssans.className}>
        {/* <h3>navebar</h3> */}

        {children}
      </body>
    </html>
  );
}
