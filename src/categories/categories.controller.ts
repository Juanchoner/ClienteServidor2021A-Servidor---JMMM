import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {

  constructor(private readonly categoriesService: CategoriesService) {
    
  }
  
  @Get()
  getAll(@Param() params){
    return this.categoriesService.obtenerCategorias(params.id);
  }
 
  @Get(":id")
  get(@Param() params){
    return this.categoriesService.obtenerCategoria(params.id);
  }

  @Post()
  create(@Body() categoria: Category){
    return this.categoriesService.crearCategoria(categoria);
  }

  @Put()
  update(@Body() categoria: Category){
    return this.categoriesService.actualizarCategoria(categoria);
  }

  @Delete(":id")
  delete(@Param() params){
    return this.categoriesService.borrarCategoria(params.id);
  }

}
