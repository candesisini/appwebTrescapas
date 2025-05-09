En este proyecto se construyeron dos aplicaciones —una para Personas y otra para Productos— con una arquitectura basada en tres capas: acceso a datos, lógica de negocio y presentación. Desde el inicio se planteó que cada capa estuviera separada de forma que pudiera ser reutilizada o intercambiada entre ambas apps sin generar dependencia entre ellas.

En la capa de acceso a datos, se crearon módulos como db.js y repositorios específicos (por ejemplo, productoRepository.js) que siguen la misma estructura de funciones CRUD. Esta modularidad permite que otra aplicación, como la de Personas, pueda usar exactamente el mismo patrón o incluso el mismo repositorio con mínimos cambios.

En la capa de lógica de negocio, se construyeron servicios (como productoService.js) que encapsulan reglas específicas del dominio (como validaciones o cálculos). Sin embargo, estas funciones están organizadas de manera que pueden ser utilizadas por otra aplicación cambiando simplemente la entidad que gestionan.

En la capa de presentación, los controladores y las rutas fueron diseñados por separado para cada aplicación, pero siguiendo el mismo esquema. Esto facilita que una aplicación pueda incorporar o intercambiar módulos de la otra, simplemente ajustando los controladores y las rutas sin necesidad de modificar el resto de la estructura.

Gracias a esta arquitectura, se logra que ambas aplicaciones sean independientes pero al mismo tiempo compatibles entre sí, lo que demuestra claramente la capacidad de intercambiar capas sin romper el funcionamiento general de cada una.