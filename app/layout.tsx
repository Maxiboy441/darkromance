import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dark Romance & New Adult - Elternaufklärung',
  description: 'Informationen für Eltern über problematische Inhalte in Dark Romance und New Adult Büchern',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}