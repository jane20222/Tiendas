import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { producto } from './schemas/producto.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()


export class ProductosService {

  constructor(
    @InjectModel(producto.name) private readonly productoModel: Model<producto>,
  ) {}

  create(createProductoDto: CreateProductoDto) {
    return 'This action adds a new producto';
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

