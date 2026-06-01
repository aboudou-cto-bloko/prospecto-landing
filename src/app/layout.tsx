import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prospecto — CRM WhatsApp pour le marché africain",
  description:
    "Collecte des leads sur GoAfricaOnline, organise-les dans un CRM et envoie des campagnes WhatsApp personnalisées. 5 000 FCFA / mois.",
  openGraph: {
    title: "Prospecto — CRM WhatsApp pour le marché africain",
    description:
      "Collecte des leads sur GoAfricaOnline, organise-les dans un CRM et envoie des campagnes WhatsApp personnalisées.",
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
