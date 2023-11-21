import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { producto } from './schemas/producto.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductoDto } from './dto/producto.dto';


@Injectable()


export class ProductosService {

  constructor(
    @InjectModel(producto.name) private readonly productoModel: Model<producto>,
  ) {}

  async create(createProductoDto: CreateProductoDto): Promise <ProductoDto>{
    const productoPorCrear:producto = new producto();
    productoPorCrear.id_producto = createProductoDto.id_Producto;
    productoPorCrear.Nombre= createProductoDto.Nombre;
    productoPorCrear.categoria= createProductoDto.categoria;
    productoPorCrear.Descripcion= createProductoDto.Descripcion;
    productoPorCrear.Precio_Unitario=createProductoDto.Precio_Unitario;
    productoPorCrear.Fecha_Venta=createProductoDto.fecha_venta;
    productoPorCrear.Stock=createProductoDto.Stock;
    const resultado: producto =await this.productoModel.create(productoPorCrear);

    const productoCreado: ProductoDto = new ProductoDto();
    productoCreado.id_Producto = resultado.id_producto.toString();
    productoCreado.Nombre= createProductoDto.Nombre;
    productoCreado.categoria=createProductoDto.categoria;
    productoCreado.Descripcion=createProductoDto.Descripcion;
    productoCreado.Precio_Unitario=createProductoDto.Precio_Unitario;

    return productoCreado;
  }


  findAll() {
    return `This action returns all productos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
function InjectaModel(name: any): (target: typeof ProductosService, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

