# Fullstack-project

## Definición de cliente

Se trata de una aplicación para diseñar y ejecutar entrenamientos creados por el propio usuario.

Para poder acceder a la aplicación habrá que hacer login. En caso de no tener usuario primero habrá que registrar uno nuevo.
En la página de login habrá un enlace que te lleve a la página de registro por si el usuario no tiene cuenta. La página de registro también tendrá un link que redirija al usuario a la página de login.

Una vez logado, la aplicación muestra automáticamente la página principal, que contará con tres botones.

El primero de ellos permitirá crear un entrenamiento nuevo. Al acceder a esta pantalla, el usuario podrá poner un nombre al entrenamiento y crear uno o varios sets de ejercicios. En cada set puede añadir los ejercicios que quiera, la duración de cada ejercicio y opcionalmente podrá añadir una descripción o instrucciones para realizar el ejercicio correctamente y prevenir lesiones. También añadirá las veces que hay que realizar cada set y el tiempo de descanso entre cada ronda. El usuario podrá añadir tantos sets como quiera y finalmente guardar el entrenamiento.

Al clickar el segundo botón, se podrá acceder a la lista de entrenamientos que ya se hayan creado y almacenado. Al hacer click en uno de estos entrenamientos, la aplicación redirigirá a una pantalla en la que se muestran los detalles de ese entrenamiento. Se podrá volver a la lista de entrenamientos, modificar el entrenamiento seleccionado, eliminarlo o comenzar el entrenamiento. Si el usuario comienza el entrenamiento, verá una pantalla en la que se muestre en qué set está realizando, la ronda por la que va el ejercicio que tiene que realizar y el timepo que le queda para finalizar ese ejercicio, además de la descripción del ejercicio en caso de que la tenga. También contará con un botón de "stop" que redirigirá a la pantalla anterior y un botón de pausa, que permitiría retomar el entrenamiento en el punto en el que se había pausado.

El tercer botón dará acceso a un calendario que permitirá asignar a cada día tareas/objetivos que cumplir. Estos objetivos se podrán marcar como completados una vez el usuario los haya realizado.

## Definición técnica

### Backend

Se deben crear tres tablas de sql:

1. workouts;
2. sets, debe tener una columna que referencie a workouts, además de la información específica de esta tabla;
3. exercises debe tener una columa que referencie a sets, además de la información específica de esta tabla;

Se añadirá una tabla "tasks" para almmacenar las tareas/objetivos que se añadan en el calendario.

También tendrá incluida una tabla users para la creación de usuarios.

Hay que crear un modelo de Entrenamientos que incluya una query que reciba el nombre del entrenamiento, los sets que tendrá ese entrenamiento y los ejercicios incluidos en cada set.
Habrá que crear un endopint POST /addworkout que añada a la tabla de workouts el nombre del entrenamiento; a la tabla de sets añadirá tantos rows como sets se hayan creado y todos esos sets tendrán en la columna workout_id la id del entrenamiento recién creado; de igual modo, se añadirán los ejercicios creados a la tabla de exercises y cada ejercicio tendrá la columna sets_id cuyo valor será igual al id del set en el que esté incluido.

Hay que crear un endpoint GET /workouts que nos muestre todos los entrenamientos que se han almacenado. (Solo mostrará las creadas por el usuario logado).
También se debe añadir un endpoint GET /workouts/:id cuando queramos acceder a un único entrenamiento.
Se debe añadir un endpoint PUT en la ruta /workouts/:id para modificar un entrenamiento almacenado.
Se debe añadir un endpoint DELETE para la ruta /workouts/:id para eliminar un entrenamiento.

Se debe añadir un endpoint GET /workouts/:id/train en el que se reproduzca el entrenamiento, comenzando por el primer ejercicio y según vaya pasando el tiempo se vaya mostrando el set, la ronda y el ejercicio que hay que realizar.

Hay que crear un modelo de Tareas que incluya una query para añadir tareas a un la tabla "tasks".
También aquí será necesario crear un endopoint POST calendar/addtask/:id que nos permita añadir tareas a cada día.

Se añadirá un endpoint GET /calendar que nos muestre el calendario.
Se añadirá un endpoint GET /calendar/:id que nos muestre las tareas del día seleccionado.
Se añadirá un endpoint PUT /calendar:id que nos permita modificar la lista de tareas del día seleccionado.
Se añadirá un endpoint DELETE /calendar:id que nos permita eliminar tareas en el día seleccionado.

### Frontend

Para empezar habrá una página de "Register" que contendrá un formulario con:

- Título ;
- Campo para email;
- Campo para username;
- Campo para password;
- Campo para submit que redirija a la página de Login tras crear un usuario con éxito.

La página "Login" también contendrá un formulario en el que se deberá introducir el email y la password. (También incluirá un campo submit para acceder a la sesión).

Tanto la página de Login como la de Register incluirán un link que se redirijan mutuamente.

La página principal debe tener un menú con tres opciones que nos redirigirán a diferentes pantallas.

La primera opción "Create new workout" nos llevará a una nueva página en la que podremos añadir los ejercicios que contendrá el entrenamiento que estamos creando. También tendremos un Formulario que contará con un campo para introducir el nombre del ejercicio, un campo para introducir el nombre del set, un campo para introducir el nombre del ejercicio, otro campo para añadir la descripción y un input para indicar el tiempo que deberá realizarse el ejercicio. Según se vayan añadiendo ejercicios se irá desplegando una lista con los ejercicios añadidos a ese set hasta el momento.
También habrá un campo para indicar las veces que se realizará el set y el tiempo de descanso entre cada ronda.
Se contará con un botón para añadir nuevos sets que desplegará un formulario idéntico al del primer set.
Por último habrá un botón para guardar el entrenamiento, almacenando toda la información introducida en cuanto a los sets, que contiene, los ejercicios, etc.

De vuelta a la página principal, la segunda opción llevará al usuario a una página que nos mostrará los entrenamientos que ya tenemos almacenados.
Cuando el usuario haga click en un entrenamiento, la aplicación redirigirá a una página que mostrará los sets que contiene ese entrenamiento y los ejercicios incluidos en cada set.
Desde esta pantalla se podrá editar el entrenamiento y eliminarlo. También habrá un tercer botón que llevará a una nueva página en la que se ejecutará el entrenamiento.
Esta página mostrará el set en el que se encuentra el usuario, la ronda que se está ejecutando, el ejercicio y el tiempo que quedá de realizar el ejercicio presente. También se mostrará la descripción del ejercicio en caso de que el usuario la haya añadido. Se incluirá un botón para que el usuario ponga en pausa el entrenamiento y otro para terminar el entrenamiento.

![image](https://github.com/MarcosUgalde/Fullstack-project/assets/82014451/76d612cf-44f3-4df6-886b-1afe49d23128)

![image](https://github.com/MarcosUgalde/Fullstack-project/assets/82014451/73bd9da0-fd1f-485a-9dfa-d33ee444eb2d)
