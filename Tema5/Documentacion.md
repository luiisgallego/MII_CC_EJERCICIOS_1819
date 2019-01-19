# Gestión de infraestructuras virtuales

# VAGRANT

El primer paso, como viene siendo lógico, es descargar la tecnología:
~~~
https://www.vagrantup.com/downloads.html
~~~

Después tan solo tenemos que crear un *Vagrantfile*, esto lo podemos hacer manualmente o con el siguiente comando:
~~~
vagrant init
~~~

Ahora ya podemos trabajar con Vagrant, en mi caso voy a crear una máquina virtual de tipo Ubuntu 14.04 llamada trusty64, para ello necesito instalar dicho *box* en mi carpeta. Si dicho box no lo descargamos previamente, vagrant lo hará automaticamente cuando se ejecute su *Vagrantfile*, entonces:
~~~
vagrant box add ubuntu/trusty64
~~~
 
Una vez instalado, ya podemos definir en nuestro *Vagrantfile* todo lo necesario. Una vez definido todo, ejecutamos el siguiente comando y las máquinas virtuales definidas se desplegarán:
~~~
vagrant up
~~~

Si quieremos eliminar la MV (no la box descargada):
~~~
vagrant destroy
~~~

Llegado a este punto comentar que es simplemente genial, Vagrant, culpa de ello la tiene la sincronización de carpetas entre las máquinas. Al levantar una MV, la carpeta donde reside el *Vagrantfile* se sincroniza completamente con la MV creada, con la de posibilidades que eso ofrece.

## Vagrant - Ansible

Ahora vamos a añadir toda la funcionalidad de Ansible al despligue de Vagrant. Para ello configuramos nuestro Vagrantfile con un apartado denominado *provision*. Una vez configurado, podemos levantar *Vagrant*.

Si ya hemos desplegado y no queremos volver a hacerlo, podemos usar el siguiente comando para la instalación de Ansible:
~~~
vagrant reload --provision
~~~

# Azure

Una vez construidas y probadas las herramientas para la virtualización del proyecto en local, llega el momento de desplegarlo en la nube, para ello vamos a usar el servicio proporcionado por *Microsoft* denominado *Azure*. Lo primero que tenemos que hacer es instalar el cliente de *Azure* en nuestra máquina local:
~~~
brew update && brew install azure-cli
~~~

Si posteriormente escribimos en la terminal *az login*, se nos redirigirá hasta la página de de Azure para loguearnos, una vez realizado esto, en nuestra terminal podremos encontrar una pequeña información de los clouds que tenemos disponibles. 

Bien, azure ya está operativo en nuestro ordenador, ahora, liguemos vagrant a azure. Para ello primero tenemos que instalar el proveedor de Azure en Vagrant:
~~~
vagrant plugin install vagrant-azure
~~~

Comentar que para estos pasos se están siguiendo los siguientes enlaces, los cuales son similares y explican bastante bien el proceso:
- [Link1](https://blog.scottlowe.org/2017/12/11/using-vagrant-with-azure/)
- [Link2](https://github.com/scottslowe/learning-tools/tree/master/vagrant/azure)

Añadimos la caja de Azure para Vagrant:
~~~
vagrant box add azure-dummy https://github.com/azure/vagrant-azure/raw/v2.0/dummy.box --provider azure
~~~

Ahora creamos un Azure Active Directory (AD) service, importante guardar la info que nos devuelve el JSON:
~~~
az ad sp create-for-rbac
~~~

Si tenemos varias subscripciones en Azure y queremos cambiar la que nos se nos ha asignado por defecto:
~~~
az account set --subscription 'your subscription name'
~~~

Ya tenemos Vagrant, el Vagrant-Azure completo, tenemos el servicio ficticio de Azure y hemos creado el servicio principal de Azure AD, podemos comenzar a crear maquinas virtuales. Para ello actualizamos nuestro *Vagrantfile* con los requisitos necesarios de Azure. Importante declarar las variables de entorno en nuestro .bash_profile.

Además, cuando hagamos *vagrant up*, al menos en Mac, hay que habilitar la compartición de carpetas locales. Para ello hay que irse a Compartir (Preferencias), para habilitar el compartir archivos y utilizar tu usuario y contraseña del pc anfitrion a la hora de lanzar *vagrant up* (nos lo pedirá la ejecución).

## Error de carpeta compartida -> vagrant smb_host

Comentar que por defecto vagrant intenta crear un enlace entre la MV y la máquina anfitrión. Si esta activo, en MAC, nos pide nuestro nombre de usuario y pass, además  hay que eliminar la carpeta compartida que se genera en el apartado *Compartir* de las *Preferencias* cada vez que intentamos crear nuevas máquinas virtuales.

Se ha intentando solucionar, pero con tal sistema operativo anfitrión, la nube de problemas ha sido grande, además de la molestia de tener que introduccir nombre de usuario y contraseña para cada máquina en cada ocasión. Tampoco ha sido de utilidad el uso de la carpeta compartida, por lo que se ha decidido prescindir de dicha carpeta compartida con la siguiente línea en el *Vagrantfile*:
~~~
config.vm.synced_folder ".", "/vagrant", disabled: true
~~~
