/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C4C64", // Bleu foncé (sidebar, texte fort)
        secondary: "#A5C1D1", // Bleu clair (cartes infos)
        accent: "#F4A261", // Orange doux (icônes alertes)
        alertCard: "#FFF3EB", // Carte alerte
        background: "#FDF7EF", // Beige neige (fond général)
        card: "#FFF8F2", // Beige légèrement plus foncé (cartes)
        cardSecondary: "#EDEAE6", // Beige légèrement plus foncé (cartes)
        cardTertiary: "#E8F1F8", // Beige léger (cartes)
        alert: "#F05B4E", // Rouge alert        weather: "#CDDDE6", // Gris bleu pour météo
        snow: "#EAF0F4", // Fond de carte météo ou illustration neige
        textTitle: "#2F2F2F", // Pour titres principaux (presque noir)
        textSubtitle: "#3F3F3F", // Pour sous-titres
        textBdy: "#5C5C5C", // Texte standard, descriptions
        textLight: "#7D7D7D", // Texte secondaire, labels
        textInverted: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
