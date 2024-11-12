import "./globals.css";

export const metadata = {
  title: "Realtime Practice",
  description: "Made with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
