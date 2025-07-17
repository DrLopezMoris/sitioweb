const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        petit: ['var(--font-petit-formal)', 'cursive'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      colors: {
        // Agregar colores personalizados
        heroui: {
          // Ejemplo de colores escalonados
          primary: {
            50: "#e8fafo",
            100: "#d1f4e0",
            200: "#a2e9c1",
            300: "#74dfa2",
            400: "#45d483",
            500: "#17c964",
            600: "#12a150",
            700: "#0e793c",
            800: "#095028",
            900: "#052814",
            foreground: "#ffffff", // Color contrastante
            DEFAULT: "#00917d", // Color principal
          },
          
          background: {
            50: "#ffffff",
            100: "#f7f7f7",
            200: "#f0f0f0",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            foreground: "#171717", // Color de texto
            DEFAULT: "#9e9e9e", // Fondo principal
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui", // prefijo para variables de temas
      addCommonColors: false, // anula los colores comunes
      defaultTheme: "light", // tema predeterminado del objeto de temas
      defaultExtendTheme: "light", // tema predeterminado para extender en temas personalizados
      layout: {
        dividerWeight: "1px", // h-divider the default height applied to the divider component
        disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        fontSize: {
          tiny: "0.75rem", // text-tiny
          small: "0.875rem", // text-small
          medium: "1rem", // text-medium
          large: "1.125rem", // text-large
        },
        lineHeight: {
          tiny: "1rem", // text-tiny
          small: "1.25rem", // text-small
          medium: "1.5rem", // text-medium
          large: "1.75rem", // text-large
        },
        radius: {
          small: "8px", // rounded-small
          medium: "12px", // rounded-medium
          large: "14px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "2px", // border-medium (default)
          large: "3px", // border-large
        },
      },
      themes: {
        light: {
          layout: {
            hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              small: "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
              medium: "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
              large: "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            },
          },
          colors: {
            // Fondo principal del sitio (suave, para no ser agresivo con la vista)
            background: "#efr9e1", // Fondo para el tema claro (un amarillo claro, cálido, similar a un tono pastel)
            
          
            // Color de texto principal (oscuro para asegurar legibilidad)
            foreground: "#171717", // Color de texto para el tema claro (un gris muy oscuro, casi negro, ideal para legibilidad)

            // Color principal de la marca (verde fresco, natural)
            primary: "#2bc37f", // Color principal para el tema claro (un verde suave que evoca naturaleza y frescura)

            // Color secundario, ideal para resaltar botones, enlaces, etc. (energético y llamativo)
            secondary: "#00917d", // 00917d Otro color personalizado para el tema claro (un rosa fuerte que funciona bien para llamar la atención)

            // Colores de apoyo y de fondo (neutros, para balancear)
            backgroundSecondary: "#ffffff", // Fondo secundario (blanco, para áreas como tarjetas, modales, etc.)
            foregroundSecondary: "#333333", // Color secundario para texto (gris oscuro para no sobrecargar de contraste el texto secundario)

            // Colores de alerta o de énfasis (para mensajes o advertencias)
            success: "#4CAF50", // Color para éxito o acciones positivas (verde brillante)
            error: "#f44336", // Color para mensajes de error o advertencias (rojo vibrante)

            // Color para contornos o detalles sutiles (para separar áreas o dar estructura)
            borderColor: "#777879", // Color de borde (gris muy claro)
  
            // Colores para interacción en el UI (botones, enlaces, etc.)
            buttonHover: "#2BC37F", // Hover sobre botones principales (verde brillante para cuando el usuario interactúa)
            buttonActive: "#599858", // Estado activo sobre botones (verde más oscuro para dar feedback visual)
          },
        },
        dark: {
          layout: {
            hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              small: "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
              medium: "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
              large: "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            },
          },
          colors: {
            background: "#212121", // Fondo para el tema oscuro
            foreground: "#ffffff", // Color de texto para el tema oscuro
            primary: "#00bcd4", // Color principal para el tema oscuro
            secondary: "#ff4081", // Otro color personalizado para el tema oscuro
          },
        },
      },
    })
  ],
  
}
