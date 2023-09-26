# sicp-movil

Este proyecto fue desarrollado con `node v12.22.12`. También se adjunta el proyecto
de android en java para evitar problemas de compactibildad con en un futuro.
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Solución temporal para un bug en el plugin de Ionic Vue

Este archivo README proporciona una solución temporal para abordar un problema específico con el plugin de Ionic Vue que puede requerir una modificación en el código fuente de una de las dependencias en el directorio `node_modules`. Tenga en cuenta que modificar archivos en el directorio `node_modules` generalmente no es una práctica recomendada, pero en este caso, es necesario para solucionar un problema específico.

## Problema

Algunos proyectos de Ionic Vue pueden enfrentar un problema relacionado con la importación de iconos desde el paquete de `ionicons`. El error se manifiesta como un problema de sintaxis en el archivo `ionic-vue.esm.js` ubicado en el directorio `node_modules/@ionic/vue/dist/`.

## Solución Temporal

Para solucionar este problema, siga los pasos a continuación:

1. Navegue hasta el archivo `ionic-vue.esm.js` ubicado en `node_modules/@ionic/vue/dist/`.

2. Abra el archivo `ionic-vue.esm.js` con su editor de código preferido.

3. Encuentre las siguientes líneas de código:

   ```javascript
   import { addIcons } from 'ionicons';
   import { ICON_PATHS } from 'ionicons/icons';
   // import { addIcons } from 'ionicons';
   // import { ICON_PATHS } from 'ionicons/icons';
   ```

4. El build.gradle debe tener estas caracteristicas
   ```
   // Top-level build file where you can add configuration options common to all sub-projects/modules.

   buildscript {
      repositories {
         google()
         jcenter()
      }
      dependencies {
         classpath 'com.android.tools.build:gradle:3.6.1'
         classpath 'com.google.gms:google-services:4.3.3'

         // NOTE: Do not place your application dependencies here; they belong
         // in the individual module build.gradle files
      }
   }

   apply from: "variables.gradle"

   allprojects {
      repositories {
         google()
         jcenter()
      }
   }

   task clean(type: Delete) {
      delete rootProject.buildDir
   }

   ```