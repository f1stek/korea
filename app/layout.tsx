import "./globals.css?any=parameter"; 
export const metadata = {
  title: 'TOWER RUSH',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}