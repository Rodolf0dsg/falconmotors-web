# LandingPage | FalconMotors

Este es el repositorio principal para la aplicación web (Landing Page) de FalconMotors.

## Tecnologías Utilizadas

* **Framework:** Next.js (App Router)
* **Estilos:** Tailwind CSS (Diseño responsive)
* **Base de Datos:** Ninguna por el momento
* **Lenguaje:** JavaScript / React

## Configuración e Instalación (Onboarding)

Sigue estos pasos para que la aplicación corra en tu máquina local:

### 1. Requisitos

* Node.js (v18.x o superior)
* npm o Yarn

### 2. Puesta en Marcha

1.  **Clonar el Repositorio:**
    ```bash
    git clone https://github.com/Rodolf0dsg/falconmotors-web.git
    cd falconmotors-web
    ```
2.  **Instalar Dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```
3.  **Variables de Entorno:**
    Crea el archivo `.env.local` o clonar el archivo `.env.template` y renombrarlo a `.env` en la raíz del proyecto. **Es crucial** para la app.

    ```
    NEXT_PUBLIC_API_URL
    ```
    La url del backend

    ```
    NEXT_PUBLIC_MANAGER_WHATSAPP
    ```
    El numero de whatsapp del gerente o ejecutivo de ventas

    ```
    NEXT_PUBLIC_SERVICES_WHATSAPP
    ```
    El numero de whatsapp del encargado de servicios

### 3. Ejecución

Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

### Vista previa
Observe el [resultado final](https://www.falconmotorsca.com/).

O visite https://www.falconmotorsca.com/
