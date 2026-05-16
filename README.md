# Biomotion Kids - Web Oficial

Landing page del proyecto. Una sola página, HTML/CSS/JS vanilla. Sin build, sin dependencias.

---

## Estructura

```
biomotion-kids/
├── index.html      → Página principal
├── styles.css      → Estilos
├── script.js       → Nav móvil + animaciones scroll
└── assets/
    ├── logo.png
    ├── logo-donbosco.png
    ├── menu.png
    ├── team.png
    ├── game-colorjump.png
    ├── game-mirrorword.png
    ├── game-sizesort.png
    ├── game-balloonpop.png
    └── trailer.mp4      ← falta poner este
```

---

## 1. Reemplazar el trailer

### Opción A: Video local (recomendado para QR impreso)
Tirá tu archivo `.mp4` en `assets/` con nombre `trailer.mp4`. Listo.
- Tamaño recomendado: máximo 30 MB (sino tarda en cargar)
- Resolución: 1280x720 o 1920x1080
- Comprimí con HandBrake si pesa mucho

### Opción B: YouTube
Si subís el trailer a YouTube:
1. Sacá el ID del video. Si la URL es `https://www.youtube.com/watch?v=ABC123xyz`, el ID es `ABC123xyz`.
2. Abrí `index.html`, buscá `<!-- OPCIÓN B`.
3. Comentá el bloque `<video>...</video>`.
4. Descomentá el bloque `<iframe>` y reemplazá `VIDEO_ID` con tu ID.

---

## 2. Cambiar link de descarga

En `index.html`, buscá `<!-- REEMPLAZAR HREF` y cambiá el `href="#"` por:
- **itch.io** (recomendado): `https://tu-usuario.itch.io/biomotion-kids`
- **GitHub Releases**: `https://github.com/enano12345ggl2uwu/ProyectoGrado/releases/latest`
- **Drive/Mega**: link directo al `.zip`

---

## 3. Desplegar en GitHub Pages

Esto te da URL estable, gratis, para siempre. Perfecto para el QR de madera.

### Pasos:
1. Crear repo nuevo en GitHub llamado `biomotion-kids` (o como quieras).
2. Subir todos estos archivos al repo:
   ```bash
   cd biomotion-kids
   git init
   git add .
   git commit -m "Initial commit - web Biomotion Kids"
   git branch -M main
   git remote add origin https://github.com/enano12345ggl2uwu/biomotion-kids.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Source → Deploy from branch → main / root → Save**
4. Esperá 1-2 minutos. Tu URL será:
   ```
   https://enano12345ggl2uwu.github.io/biomotion-kids/
   ```

### Para actualizar después:
```bash
git add .
git commit -m "Actualización"
git push
```
Cambios visibles en ~30 segundos.

### Alternativa: Netlify (también gratis, link más bonito)
1. Crear cuenta en netlify.com
2. Arrastrar la carpeta `biomotion-kids` a netlify.com/drop
3. Te da URL del tipo `biomotion-kids.netlify.app`
4. Podés cambiarla a algo custom desde el panel

---

## 4. Generar QR para imprimir en madera

**REGLA DE ORO: usá QR ESTÁTICO, NO dinámico.** Los QR estáticos no expiran nunca. Los dinámicos (bit.ly, acortadores, servicios de pago) sí pueden caerse y dejar tu madera inútil.

### Sitio recomendado: qrcode-monkey.com
1. Entrá a https://www.qrcode-monkey.com/
2. En "Your URL" pegá tu URL final (ej: `https://enano12345ggl2uwu.github.io/biomotion-kids/`)
3. **NO actives ningún "tracking" ni "dinámico"** — quedate solo con la URL directa.
4. (Opcional) En "Set Colors" usá los colores del logo: marrón `#8B5A2B` para los puntos.
5. (Opcional) En "Add Logo Image" subí el logo de Biomotion Kids.
6. Click "Create QR Code".
7. Descargá en **PNG (5000x5000)** o **SVG** para máxima calidad de grabado.

### Otras opciones buenas:
- https://www.qr-code-generator.com/ (mismo enfoque, gratis, estático)
- https://goqr.me/ (más simple)

### Para grabado en madera:
- Resolución mínima: 1000x1000 px
- Formato ideal: SVG (vectorial, escala perfecto)
- Tamaño físico: 8x8 cm mínimo para escaneo cómodo a 30 cm
- Contraste: oscuro sobre claro siempre. Negro sobre madera clara funciona perfecto.
- Probá escanearlo desde el PNG antes de mandar a grabar.

---

## 5. Testing local

Abrí `index.html` en el navegador haciendo doble click. Funciona todo menos el video local (algunos navegadores bloquean carga de mp4 desde `file://`). Para test completo:

```bash
# Desde la carpeta:
python -m http.server 8000
```
Después abrí `http://localhost:8000` en el navegador.

---

## Notas

- Las fuentes (`Lilita One`, `Nunito`, `Caveat`) cargan desde Google Fonts.
- El sitio es 100% responsive. Probá en móvil.
- No hay tracking, no hay cookies, no hay analytics. Si querés agregar, usá Plausible o Umami (privacidad respetada).
