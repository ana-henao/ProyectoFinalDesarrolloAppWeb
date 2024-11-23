# ProyectoFinalDesarrolloAppWeb

## Propuesta: Administrador de pedidos de restaurante.

La propuesta para el proyecto final de curso consiste en desarrollar una aplicación web de la carta de un restaurante, en la cual se pueda realizar la gestión de la carta y los pedidos dependiendo de los roles, los cuales serán 3:

### Roles
**_Administrador:_** Puede gestionar la carta realizando acciones como agregar/modificar/eliminar productos, en caso de que algún plato se agote o si el restaurante tiene opción de plato/menú del día.

**_Empleado (mesero):_** Visualiza la información de la carta, pero no puede editarla ni modificarla. sólo puede crear/gestionar los pedidos pendientes enviándolos a cocina.

**_Cliente (comensal):_** Ve información básica de la carta como platos/ingredientes/precios.

### Casos de uso:

El cliente registra su nombre y documento de identidad, ingresa a la carta del restaurante para visualizarla.

El mesero ingresa el nombre e identificación del cliente, asi como el número de la mesa y puede visualizar el menú y agregar los items que el cliente desea.

El administrador agrega, actualiza y/o elimina items de la carta.


## Manual limitado:

Para ingresar como administrador, el número de identificacion es 987654321 y el nombre es: admin. En la lista de los platos se mostrará la opción de agregar, editar y eliminar, estas funcionalidades están completas en la API, pero no alcancé a integrarlas con el frontend.

Para ingresar como mesero, se pueden usar las siguientes opciones:
('Carlos Pérez', '123456789'),
('Luis Martínez', '456789123'),
('María Rodríguez', '321654987')

En la lista de platos, se mostrará la opción de agregar al pedido. Esta funcionalidad también esta completa en la API, pero no alcancé a integrarla al frontend.

Para ingresar como cliente, se puede usar cualquier nombre e identificación que no coincida con el administrador o los meseros. En la opción de platos solo se muestra la información de la carta.
