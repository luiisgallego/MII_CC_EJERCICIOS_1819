# Provisionamiento en infraestructuras virtuales

De cara al correcto desarrollo del Hito 3, vamos a comenzar los ejercicios por el apartado de *Ansible*.

Los sistemas operativos utilizados van a ser:
- Anfitrión: Mac OS
- Invitado: Ubuntu Server 16.04 

### Instalación necesaria MacOS

La instalación de Ansible primero se va a realizar en el sistema operativo principal, Mac OS, podemos encontrar los comandos 
[aquí](https://docs.ansible.com/ansible/2.5/installation_guide/intro_installation.html#latest-releases-via-pip). También podemos hacer uso de la siguiente línea de ordenes:
~~~
sudo pip install paramiko PyYAML jinja2 httplib2 ansible
~~~

Ahora es necesario poder establecer una conexión mediante *SSH* con nuestra máquina virtual, para ello realizamos la siguiente [configuracion1](https://jorgepuente.es/sistemas/acceder-una-maquina-virtual-virtualbox-traves-nat/) o [configuracion2](http://www.felip.info/linux/configurar-ssh-entre-huespedes-virtualbox-y-anfitrion-en-linux/).

Aunque realmente la configuración que ha resultado exitosa es [esta](https://unix.stackexchange.com/questions/231138/ssh-into-virtualbox-on-mac). Una vez configurado en VirtualBox tal y como nos dicen, realizamos lo siguiente desde la terminal del anfitrion:
~~~
ssh USER_MAQUINA_INVITADA@localhost -p 2222
~~~

Ya podemos ver como *SSH* funciona, pero de cara a utilizar *Ansible* con facilidad aun hay configuración que realizar. Una de ellas es pasar la clave pública del anfitrion al visitante, para ello:
~~~
scp -P 2222 ~/.ssh/id_rsa.pub luis@localhost:~/id_rsa.pub
~~~
Además, en la máquina anfitriona tenemos que añadir esta clave, para ello:
~~~
mkdir ~/.ssh
cat ~/id_rsa.pub >> ~/.ssh/authorized_keys
~~~

Una vez realizado esto, *SSH* debería funcionar con normalidad.


### Instalacion necesaria Ubuntu Server 16.04

- Maquina: ubuntuCC
- Usuario: luis

Lo primero que hacemos es instalar *SSH*, para ello hemos utilizado el siguiente [tutorial](http://linux-sys-adm.com/ubuntu-16.04-lts-how-to-install-and-configure-ssh/).
Lo segundo importante es comprobar que *Python 3* está operativo, para ello realizamos lo siguiente:
~~~
python3 --version
~~~

Quizás sea más conveniente la instación de python2, ya que la máquina anfitriona es el que usa y esta dando error en la anfitriona ya que ubuntu no tiene la misma version de python, por tanto:
~~~
sudo apt install python-minimal
~~~

Muy importante modificar el archivo /etc/sudoers para que al hacer sudo no pida contraseña:
~~~
# Allow members of group sudo to execute any command
%sudo	ALL=(ALL:ALL) NOPASSWD: ALL
~~~

### Explicacion clase

[ejemplo playbook](https://github.com/JJ/platzi-docker-vm/blob/master/provision/playbook.yml)

 - become: superusuario?
 - raw: orden propia de ansible (ejecuta en este caso). Usar apt-get solo en caso muy necesario (git y python)
 - apt: con pkg= indico el paquete que quiero instalar y con state=latest indico que quiero la última version
 - (-y) instala si o si, evita que te pregunte y que se pare pues.

 Crear varios playbook, para cada cosa específica, luego alguno más general.

 ### EJECUTAR

~~~
ansible-playbook -i ansible_hosts -b playbook.yml
~~~

### VAGRANT

El primer paso, como viene siendo lógico, es descargar la tecnología:
~~~
https://www.vagrantup.com/downloads.html
~~~

Después tan solo tenemos que crear un *Vagrantfile*, esto lo podemos hacer manualmente o con el siguiente comando:
~~~
vagrant init
~~~

Ahora ya podemos trabajar con Vagrant, en mi caso voy a crear una maquina virtual de tipo Ubuntu 16.04 llamada xenial64, para ello necesito instalar dicho *box* en mi carpeta. Si dicho box no lo descargamos previamente, vagrant lo hará automaticamente cuando se ejecute su *Vagrantfile*, entonces:
~~~
vagrant box add ubuntu/xenial64
~~~
 
Una vez instalado, ya podemos definir en nuestro *Vagrantfile* todo lo necesario. Una vez definido todo, ejecutamos el siguiente comando y las máquinas virtuales definidas se desplegarán:
~~~
vagrant up
~~~
Si quieremos eliminar la MV (no la box descargada):
~~~
vagrant destroy
~~~

Llegado a este punto comentar que es simplemente bestial Vagrant, culpa de ello la tiene la sincronización de carpetas entre las maquinas. Al levantar una MV, la carpeta donde reside el *Vagrantfile* se sincroniza completamente con la MV creada, con la de posibilidades que eso ofrece.

## Vagrant - Ansible

Ahora vamos a añadir toda la funcionalidad de Ansible al despligue de Vagrant, si ya hemos desplegado y no queremos volver a hacerlo, podemos usar el siguiente comando para la instalación de Ansible:
~~~
vagrant reload --provision
~~~
