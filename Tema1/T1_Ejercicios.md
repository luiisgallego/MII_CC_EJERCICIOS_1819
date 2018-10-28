# Ejercicios Tema 1 - Arquitecturas software para la nube

### Buscar una aplicación de ejemplo, preferiblemente propia, y deducir qué patrón es el que usa. ¿Qué habría que hacer para evolucionar a un patrón tipo microservicios?

La aplicación de ejemplo sería mi TFG desarrollado, este desarrolla un ERP para la gestión de una PYME, concretamente una funeraria. El patrón usado fue el Modelo-Vista-Controlador, desarollado mediante PHP. 

Ya que este proyecto está basado en una serie de módulos distintos, la mejor opción para evolucionar hacia un patrón de microservicios sería que los nuevos módulos que se implementen estén basado en dicho patrón. 

Pensando en actualizar los modulos ya desarrollados, una opción posible sería abstraer cada uno de los servicios de cada módulo y desplegarlos en la nube. Posteriormente comunicariamos cada servicio mediante una API-REST y tendríamos lista nuestra nueva arquitectura.

### En la aplicación que se ha usado como ejemplo en el ejercicio anterior, ¿podría usar diferentes lenguajes? ¿Qué almacenes de datos serían los más convenientes?

En principio el lenguaje usado ha sido PHP , lo cual nos deja poco margen de cambio. Una opción sería utilizar algún framework, o de cara a una evolución más ambiciosa, utilizar algún lenguaje más actual en el lado del cliente, como por ejemplo algún framework basado en Javascript. La opción mas atractiva actualmente sería Node.js.

En cuanto al almacén de datos, el usado fue MySQL, por lo que sería lógico continuar con el. Pensando en una evolución hacia un almacén noSQL, MongoDB sería una opción más que interesante.