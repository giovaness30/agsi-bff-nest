import { Module } from '@nestjs/common';
import { ContactTypesService } from './contact-types.service';
import { ContactTypesController } from './contact-types.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ContactTypesController],
  providers: [ContactTypesService]
})
export class ContactTypesModule { }
