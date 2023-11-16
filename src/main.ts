import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
  .setTitle ('Mongo')
  .setDescription ('API de Mongo')
  .setVersion ('1.0')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup ('/api', app, document)


  await app.listen(3000);
}
bootstrap();

//Tabla de Productos:

//ID_Producto (clave primaria)
//Nombre
//Categoría
//Precio_Unitario
//Tabla de Ventas:

//ID_Venta (clave primaria)
//ID_Producto (clave foránea referenciando la tabla de Productos)
//Cantidad
//Precio_Total
//Fecha_Venta
//ID_Vendedor (puedes incluir este campo si necesitas registrar al vendedor)

/*Tabla de Productos:

ID_Producto (clave primaria)
Nombre
Descripción
Precio_Unitario
Stock
Tabla de Vendedores:

ID_Vendedor (clave primaria)
Nombre
Correo_Electrónico
Otros_Detalles
Tabla de Ventas:

ID_Venta (clave primaria)
ID_Producto (clave foránea referenciando la tabla de Productos)
ID_Vendedor (clave foránea referenciando la tabla de Vendedores)
Cantidad
Precio_Unitario
Fecha_Venta*/