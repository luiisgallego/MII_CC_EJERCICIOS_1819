# Ejercicios Tema 2 - Desplegando aplicaciones en la nube: Uso de PaaS y DBaaS

### Ejercicio 1 - Darse de alta en algún servicio PaaS tal como Heroku, zeit, BlueMix u OpenShift.

Alta realizada en Heroku.

### Ejercicio 2 - Crear una aplicación en OpenShift o en algún otro PaaS en el que se haya dado uno de alta. Realizar un despliegue de prueba usando alguno de los ejemplos incluidos con el PaaS.

Una vez que nos hemos dado de alta en Heroku, hemos descargado el cliente y nos hemos logueado:
![login](https://github.com/luiisgallego/MII_CC_EJERCICIOS_1819/blob/master/Tema2/img/Ejercicio2_1.png)

Para la realización de este ejercicio hemos seguido al completo el manual proporcionado por Heroku, llegando a desplegar la aplicación base que nos indican como podemos ver en la siguiente captura:
![Despligue de Heroku](https://github.com/luiisgallego/MII_CC_EJERCICIOS_1819/blob/master/Tema2/img/Ejercicio2_2.png)

### Ejercicio 3 - Realizar una app en express (o el lenguaje y marco elegido) que incluya variables como en el caso anterior.

Una vez probado el ejemplo de la Porra, vamos a realizar un pequeño programa que nos permita insertar nombres de items de cualquier tipo, añadiendo además cantidad y precio. 

Esta sencilla aplicación está fuertemente apoyada en el ejemplo anterior de la Porra, por lo que una vez hecho el PUT del item ejecuentando el siguiente CURL:
~~~
curl -X PUT http://127.0.0.1:5000/item/prueba/3/100
~~~

Obtenemos en el navegador el siguiente resultado:

![Ejercicio3](https://github.com/luiisgallego/MII_CC_EJERCICIOS_1819/blob/master/Tema2/img/Ejercicio3_1.png)

### Ejercicio 4 - Crear pruebas para las diferentes rutas de la aplicación.

Una vez instalado mocha y should para la realización de los test, hemos definido dichos test. Para ello hemos diferenciado entre los correspondientes a la aplicación principal y los definidos para la clase específica de Items. También hemos tenido que modificar package.json, añadiendo las directivas necesarias para una vez ejecutar mocha en el terminal que se ejecuten dichos test. Obteniendo el siguiente resultado:

![Ejercicio4](https://github.com/luiisgallego/MII_CC_EJERCICIOS_1819/blob/master/Tema2/img/Ejercicio4.png)

Tan solo se han definido un conjunto pequeño de test a modo de ejemplo para los ejercicios. Estos serán completados para la realización de la práctica.

### Ejercicio 5 - Instalar y echar a andar tu primera aplicación en Heroku.



### Ejercicio 6 - Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.




