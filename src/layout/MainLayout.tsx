import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToHash from "../components/ScrollToHash";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="site-shell">
      <ScrollToHash />
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  );
}