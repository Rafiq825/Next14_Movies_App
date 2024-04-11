import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Provider from "./Provider";
import Navbar from "@/components/navbar/Navbar";
import SearchBox from "@/components/searchBox/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " FilmFlick",
  description: "FilmFlick is your premier destination for all things movies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar/>
          <SearchBox/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
