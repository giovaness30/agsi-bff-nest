import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactTypesService } from './contact-types.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { catchError } from 'rxjs';
import { errorResponseHelper } from 'src/shared/helpers/error.response.helper';
import { BodyUpdateContactType } from './dtos/update-contact-type.dto';
import { BodyCreateContactType } from './dtos/create-contact-Type.dto';

@ApiTags('Tipo de Contato')
@Controller('/contact-type')
export class ContactTypesController {
  constructor(private readonly contactTypesService: ContactTypesService) { }


  @Get()
  getAllContactTypes() {
    return this.contactTypesService
      .getAllContactTypes()
      .pipe(catchError(errorResponseHelper))
  }

  @Put()
  @ApiOperation({ summary: 'Atualiza Tipo de Contato' })
  async updateContactType(@Body() items: BodyUpdateContactType) {
    return await this.contactTypesService.putContactType(items)
  }

  @Post()
  @ApiOperation({ summary: 'Novo Tipo de Contato' })
  async createContactType(@Body() item: BodyCreateContactType) {
    return await this.contactTypesService.postContactType(item)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactTypesService.deleteContactType(id)
  }

}
