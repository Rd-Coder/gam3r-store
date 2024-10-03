import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import Pagina from "@/components/template/pagina";

export const metadata: Metadata = {
  title: "Gam3r.store",
  description: "Versão completa da loja G3mer.store",
};

const font = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}
      >
        <Pagina className="boxed">
          {children}
        </Pagina>
      </body>
    </html>
  );
}
