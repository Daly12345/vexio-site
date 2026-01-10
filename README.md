# Vexio - Sitio Web Profesional

Sitio web profesional para Vexio, empresa de soluciones digitales en México.

## Stack Tecnológico

- **Next.js 16** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos y diseño
- **React** - Biblioteca de UI

## Características

### Secciones Implementadas

1. **Hero** - Página de inicio con llamado a la acción principal
2. **Servicios** - Páginas web, E-commerce, SEO y Mantenimiento
3. **Precios** - 5 planes detallados (Micro, Básico, Profesional, Premium, E-commerce)
4. **Portafolio** - Galería de proyectos (con placeholders)
5. **Contacto** - Formulario de contacto integrado con WhatsApp
6. **Navegación** - Menu responsive con enlaces a secciones
7. **Footer** - Información de contacto y enlaces

### Diseño

- Tema oscuro profesional
- Acentos en cyan/azul (#06b6d4, #22d3ee)
- Totalmente responsive (mobile, tablet, desktop)
- Animaciones y transiciones suaves
- Optimizado para conversión

## Instalación y Uso

### Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

### Instalar Dependencias

```bash
npm install
```

### Ejecutar en Desarrollo

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

### Compilar para Producción

```bash
npm run build
```

### Ejecutar en Producción

```bash
npm start
```

## Personalización

### Configurar WhatsApp

Actualiza el número de WhatsApp en todos los componentes:
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/Pricing.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

Busca: `https://wa.me/5215512345678` y reemplaza con tu número real.

### Modificar Contenido

- **Servicios**: Edita `components/Services.tsx`
- **Precios**: Edita `components/Pricing.tsx`
- **Portafolio**: Edita `components/Portfolio.tsx` y agrega imágenes reales en `/public`
- **Contacto**: Edita `components/Contact.tsx`

### Cambiar Colores

Modifica `app/globals.css`:
```css
:root {
  --primary: #06b6d4;        /* Color principal */
  --primary-dark: #0891b2;   /* Color principal oscuro */
  --accent: #22d3ee;         /* Color de acento */
}
```

## Estructura del Proyecto

```
vexio-site/
├── app/
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página principal
├── components/
│   ├── Navbar.tsx          # Navegación
│   ├── Hero.tsx            # Sección hero
│   ├── Services.tsx        # Servicios
│   ├── Pricing.tsx         # Planes de precios
│   ├── Portfolio.tsx       # Portafolio
│   ├── Contact.tsx         # Contacto
│   └── Footer.tsx          # Footer
├── public/                 # Archivos estáticos
└── package.json
```

## Próximos Pasos Recomendados

1. **Configurar dominio vexio.mx**
   - Comprar dominio si aún no lo tienes
   - Configurar DNS

2. **Agregar imágenes reales**
   - Reemplazar placeholders en portafolio
   - Agregar logo de Vexio

3. **Desplegar a producción**
   - Vercel (recomendado para Next.js)
   - Netlify
   - Otro hosting

4. **Configurar Analytics**
   - Google Analytics
   - Facebook Pixel

5. **SEO adicional**
   - Agregar sitemap.xml
   - Configurar robots.txt
   - Optimizar meta tags

## Comandos Útiles

```bash
npm run dev          # Desarrollo
npm run build        # Compilar
npm start            # Producción
npm run lint         # Verificar código
```

## Soporte

Para preguntas o soporte:
- Email: contacto@vexio.mx
- WhatsApp: +52 55 1234 5678

## Licencia

Propietario: Vexio © 2026
