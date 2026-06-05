import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prospecto — Arrêtez de chercher. Commencez à signer.",
  description: "CRM de prospection WhatsApp auto-hébergé pour freelancers africains. Gérez vos prospects, lancez vos campagnes, signez plus de clients. 5 000 FCFA/mois.",
  icons: {
    icon: "/logo-icon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Prospecto — Arrêtez de chercher. Commencez à signer.",
    description: "CRM de prospection WhatsApp auto-hébergé pour freelancers africains.",
    url: "https://prospecto.aboudouzinsou.site",
    siteName: "Prospecto",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prospecto — CRM WhatsApp pour le marché africain",
    description: "5 000 FCFA / mois · GoAfricaOnline · WhatsApp · Bénin & Afrique francophone",
  },
  metadataBase: new URL("https://prospecto.aboudouzinsou.site"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
