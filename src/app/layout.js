import "./globals.css";

export const metadata = {
  title: "Techliar Automation",
  description:
    "Engineering innovation for real-world challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}