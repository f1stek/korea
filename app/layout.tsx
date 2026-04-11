import "./globals.css";

export const metadata = {
  title: "TOWER RUSH & MINESLOT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, backgroundColor: "#050505" }}>
        {children}
      </body>
    </html>
  );
}