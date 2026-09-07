# Configuración de Google Search Console para ESG Consultores

## 📋 Resumen del Sitemap

Tu sitio web ya tiene configurado un **sitemap.xml** optimizado con todas las páginas del sitio.

**URL del Sitemap**: `https://esgconsultores.com.mx/sitemap.xml`

---

## 🚀 Pasos para Enviar el Sitemap a Google Search Console

### 1. Acceder a Google Search Console
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Inicia sesión con tu cuenta de Google
3. Si aún no has agregado tu propiedad, haz clic en **"Agregar propiedad"**

### 2. Verificar la Propiedad del Sitio

Elige uno de estos métodos de verificación:

#### Método 1: Archivo HTML (Recomendado)
1. Google te proporcionará un archivo HTML para descargar
2. Sube este archivo a la carpeta `public/` de tu proyecto
3. Haz un commit y push al repositorio
4. Despliega los cambios
5. Haz clic en "Verificar" en Google Search Console

#### Método 2: Etiqueta HTML
1. Google te dará una etiqueta `<meta>` para agregar
2. Agrégala en el archivo `index.html` dentro de la sección `<head>`
3. Haz commit, push y despliega
4. Haz clic en "Verificar"

#### Método 3: Google Analytics (si ya lo tienes configurado)
1. Si ya tienes Google Analytics instalado con el mismo código de seguimiento
2. Selecciona esta opción y verifica automáticamente

### 3. Enviar el Sitemap

Una vez verificada la propiedad:

1. En el menú lateral izquierdo, ve a **"Sitemaps"**
2. En el campo "Agregar un sitemap nuevo", ingresa: `sitemap.xml`
3. Haz clic en **"Enviar"**

Google comenzará a rastrear tu sitio automáticamente.

---

## 📊 Información del Sitemap Actual

### Estadísticas
- **Total de URLs**: 28 páginas
- **Última actualización**: 2026-02-03
- **Formato**: XML estándar compatible con Google

### Páginas Incluidas por Categoría

#### 🏠 Página Principal (Priority: 1.0)
- `/` - Home Page

#### 🌱 Consultoría ESG (Priority: 0.8-0.9)
- `/consultoria-esg/cumplimiento-nis-2024`
- `/consultoria-esg/certificacion-gri`
- `/consultoria-esg/auditoria-sostenibilidad`
- `/consultoria-esg/reportes-esg`
- `/consultoria-esg/capacitacion-esg`

#### 👔 Coaching Ejecutivo (Priority: 0.7-0.8)
- `/coaching-ejecutivo/liderazgo-sostenible`
- `/coaching-ejecutivo/transicion-laboral`

#### 🏢 Servicios Empresariales (Priority: 0.7-0.8)
- `/servicios-empresariales/smart-sales`
- `/servicios-empresariales/auditoria-comercial`
- `/servicios-empresariales/gestion-sucursales`

#### 👨‍👩‍👧 Coaching Familiar (Priority: 0.7)
- `/coaching-familiar/coach-tu-hijo`
- `/coaching-familiar/orientacion-vocacional`

#### 📚 Recursos y Contacto (Priority: 0.7-0.9)
- `/recursos/webinars`
- `/recursos/herramientas`
- `/recursos/casos-exito`
- `/recursos/certificaciones`
- `/certificaciones`
- `/equipo`
- `/contacto`
- `/agendar`
- `/diagnostico-esg`
- `/faq`

#### 🎯 Landing Pages (Priority: 0.9)
- `/nis-2025-landing`
- `/certificacion-gri-landing`

#### ⚖️ Páginas Legales (Priority: 0.3)
- `/politicas`
- `/aviso-privacidad`

---

## 🤖 Robots.txt Configurado

Tu archivo `robots.txt` ya está optimizado para:
- ✅ Google Search (Googlebot)
- ✅ Bing Search (Bingbot)
- ✅ AI Crawlers (ChatGPT, Claude, Gemini, Perplexity)
- ✅ Social Media Crawlers (Twitter, Facebook, LinkedIn)
- ✅ Referencia al sitemap

**Ubicación**: `https://esgconsultores.com.mx/robots.txt`

---

## 📈 Monitoreo Post-Envío

Después de enviar el sitemap, monitorea:

### En Google Search Console:
1. **Cobertura**: Verifica que todas las páginas sean indexadas
2. **Rendimiento**: Analiza clics, impresiones y posición promedio
3. **Experiencia**: Revisa Core Web Vitals y usabilidad móvil
4. **Mejoras**: Verifica datos estructurados y breadcrumbs

### Tiempos Esperados:
- **Primera indexación**: 1-3 días
- **Indexación completa**: 1-2 semanas
- **Datos de rendimiento**: 2-3 días después de la indexación

---

## 🔧 Mantenimiento del Sitemap

### Actualización Automática
El sitemap debe actualizarse cada vez que:
- Se agreguen nuevas páginas
- Se eliminen páginas existentes
- Se modifique contenido importante

### Actualización Manual
Si agregas o eliminas páginas:
1. Edita `public/sitemap.xml`
2. Actualiza la fecha `<lastmod>` con formato `YYYY-MM-DD`
3. Ajusta `<priority>` según importancia (0.0 - 1.0)
4. Ajusta `<changefreq>` según frecuencia de actualización

### Frecuencias Recomendadas:
- `daily`: Contenido que cambia diariamente
- `weekly`: Página principal, blog
- `monthly`: Páginas de servicios
- `yearly`: Páginas legales, certificaciones

---

## ✅ Checklist de Verificación

Antes de enviar a Google Search Console, verifica:

- [x] Sitemap.xml existe en `/public/sitemap.xml`
- [x] Robots.txt existe en `/public/robots.txt`
- [x] Todas las URLs son accesibles (sin errores 404)
- [x] Todas las URLs usan HTTPS
- [x] Las fechas de lastmod están actualizadas
- [x] Las prioridades reflejan la importancia de las páginas
- [ ] El sitio está desplegado en producción
- [ ] Google Search Console está configurado
- [ ] El sitemap ha sido enviado

---

## 🆘 Solución de Problemas

### Error: "No se pudo obtener el sitemap"
- Verifica que el archivo esté en la carpeta `public/`
- Confirma que el sitio esté desplegado
- Verifica que la URL sea accesible: `https://esgconsultores.com.mx/sitemap.xml`

### Error: "Formato de sitemap no válido"
- El sitemap ya está en formato XML válido
- Si modificas manualmente, usa un validador XML

### Páginas no indexadas
- Verifica que no haya errores en Google Search Console
- Revisa que las páginas no tengan `noindex` en meta tags
- Asegúrate de que el contenido sea único y valioso

---

## 📞 Soporte Adicional

Si necesitas ayuda adicional:
1. Consulta la [documentación oficial de Google Search Console](https://support.google.com/webmasters)
2. Revisa el [Centro de ayuda de Sitemaps](https://developers.google.com/search/docs/advanced/sitemaps/overview)
3. Contacta al equipo de desarrollo

---

**Última actualización**: 2026-02-03  
**Versión del sitemap**: 1.2  
**Total de URLs**: 28 páginas
