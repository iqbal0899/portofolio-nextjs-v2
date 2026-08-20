import "./globals.css";
import LayoutClient from "../components/layoutClient";

export const metadata = {
  title: "Muhammad Iqbal | Fullstack Developer",
  description: "Personal portfolio of Muhammad Iqbal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}