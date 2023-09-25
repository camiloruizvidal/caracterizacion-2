# sicp-movil

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
