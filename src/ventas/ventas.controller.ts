import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { VentaDto } from './dto/venta.dto';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  async create(@Body() createVentaDto: CreateVentaDto): Promise<VentaDto>{
    const resultado:VentaDto= await this.ventasService.create(createVentaDto);
    return resultado;
  }

  @Get()
  async findAll(): Promise <VentaDto[]> {
    const  resultado: VentaDto []=  await this.ventasService.findAll();
    return resultado;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise <VentaDto>{
    const resultado : VentaDto = await this.ventasService.findOne(id);
    return resultado;
  }

  @Patch(':id/retirar-Producto/:productoId')
  async retirarProducto(@Param('id') id: string, @Param('productoId') productoId :string) : Promise <VentaDto> {
    const resultado:VentaDto = await this.ventasService.retirarProducto(id, productoId);
    return resultado;
  }

  @Patch(':id/devolucion-Producto/:productoId')
  async devolucionProducto(@Param('id') id: string, @Param('productoId') productoId :string) : Promise <VentaDto> {
    const resultado:VentaDto = await this.ventasService.devolucionProducto(id, productoId);
    return resultado;
  }
  @Patch(':id/despacho-producto/:productoId')
  async despachoProducto(
    @Param('id') id: string,
    @Param('productoId') productoId: string,
  ): Promise<VentaDto> {
    try {
      const resultado: VentaDto = await this.ventasService.despachoProducto(id, productoId);
      return resultado;
    } catch (error) {
      // Puedes manejar el error de manera específica si es necesario
      console.error('Error en despachoProducto controller:', error);
      throw new InternalServerErrorException('Error en despachoProducto', error.message);
    }
  }
  


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVentaDto: UpdateVentaDto) {
    return this.ventasService.update(+id, updateVentaDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventasService.remove(+id);
  }
}