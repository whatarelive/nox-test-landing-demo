# Landig Page for Technical Test
Este proyecto es una aplicación web desarrollada con Next.js, un framework de React que permite la creación de
aplicaciones web rápidas y escalables. La aplicación está diseñada para cumplir con los objetivos de la prueba
técnica para el puesto de desarrollador Frontend por la empresa Nox-Creation.

---

## Comenzando
Estas instrucciones te proporcionarán una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

---

### Prerequisitos
Para ejecutar este proyecto, necesitarás tener instalado lo siguiente:

- Node.js v18 o superior

---

### Instalación
1. Primero, clona el repositorio:

```bash
  git clone https://github.com/whatarelive/nox-test-landing-demo.git
```

2. Instalar las dependencias:
```bash
   cd nox-test-landing-demo
   npm install
```

3. Ejecutar la aplicación en modo desarrollo:
```bash
   npm run dev
```

4. Abre el navegador y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

----

### Estructura del Proyecto
`public/:` Archivos estáticos como imágenes, fuentes y otros recursos que se pueden servir directamente.  
`src/:` Código fuente de la aplicación.
- `app/:` Sistema enrutado de la aplicacion. Contiene las páginas de la aplicación.
- `lib/:` Modulo de autentificacion de la aplicacion.  
  |--> `actions/:` Funciones que solo se ejecutaran en el servidor.   
  |--> `interfaces/:` Definiciones de types de TypeScript usados.  
  |--> `util:/` Modulo para elementos auxiliares en la aplicacion.  
- `ui/:` Modulo del Contenido del aplicacion orientado a la jugabilidad.   
  |--> `components/:` Componentes de React pertenecientes al modulo.      
  |--> `data/:` Data que se usa en la ui de la aplicacion.        
  |--> `fonts:/` Configuración de fuentes empleadas.   
  |--> `providers:/` Configuración del provider de Chakra UI.  
  |--> `routes:/` Rutas de la aplicación.   
  |--> `styles:/` Estilos globales del aplicación.  
  |--> `theme:/` Configuración de temas de la aplicación.   
  |--> `views/:` Pantallas de la aplicación del modulo.  
`tsconfig.json:` Configuración de TypeScript.  
`next.config.js:` Configuración de Next js.  
`package.json:` Dependencias y scripts del proyecto.

----

### Construido Con
- `React :` Biblioteca de JavaScript para construir interfaces de usuario.
- `Next.js:` Framework para React que permite la renderización del lado del servidor y generación de sitios estáticos. 
- `TypeScript :` Lenguaje de programación tipado.
- `Chakra UI :` Biblioteca de componentes para React js. Para estilos y diseño. 
- `Node.js :` Entorno de ejecución para JavaScript en el servidor.

### Contribuciones
Este fue desarrollado como solución a una prueba técnica, por lo tanto no se aceptan contribuciones a este proyecto.

### Licencia
Este proyecto no está bajo ninguna Licencia.
