# Ejercicios Desarrollo basado en pruebas

### Ejercicio 1 - Instalar alguno de los entornos virtuales de node.js (o de cualquier otro lenguaje con el que se esté familiarizado) y, con ellos, instalar la última versión existente, la versión minor más actual de la 4.x y lo mismo para la 0.11 o alguna impar (de desarrollo).

Instalado NVM para Node.js.

![Versión instalada de NVM](https://github.com/luiisgallego/MII_CC_EJERCICIOS_1819/blob/master/DesarrolloBasadoEnPruebas/img/ejercicio1.png)

### Ejercicio 2 - Ejecutar un programa básico que trabaje con una base de datos en diferentes versiones del lenguaje. ¿Funciona en todas ellas?

Una vez instalado Node.js y la base de datos mysql he realizado un sencillo programa que podemos ver [aquí](https://github.com/luiisgallego/MII_CC_EJERCICIOS_1819/blob/master/DesarrolloBasadoEnPruebas/Ejercicio2). Tan solo calcula una sencilla operación dentro de un query que posteriormente es imprimido.

Completado este pequeño ejemplo, he pasado a desarrollar la aplicación de la Porra. Para ello, primeramente he montado una base de datos en mysql siguiendo el siguiente [tutorial](http://www.oscarabadfolgueira.com/crear-una-base-datos-mysql-desde-consola/). Obteniendo la siguiente tabla y datos:

![Tabla porras](https://github.com/luiisgallego/MII_CC_EJERCICIOS_1819/blob/master/DesarrolloBasadoEnPruebas/img/ejercicio2_1.png)
![Datos tabla porras](https://github.com/luiisgallego/MII_CC_EJERCICIOS_1819/blob/master/DesarrolloBasadoEnPruebas/img/ejercicio2_2.png)

El programa construido para la porra lo podemos ver [aquí](https://github.com/luiisgallego/MII_CC_EJERCICIOS_1819/blob/master/DesarrolloBasadoEnPruebas/Porra). Para lanzarlo:
~~~
node porra.js
~~~
Para obtener los resultados hay que dirigirse a [localhost:3000](https://localhost:3000). Siendo estos: ![Resultados](https://github.com/luiisgallego/MII_CC_EJERCICIOS_1819/blob/master/DesarrolloBasadoEnPruebas/img/ejercicio2_3.png)
