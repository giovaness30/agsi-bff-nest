import { Module } from '@nestjs/common';
import { SisUserModule } from './modules/sisUsers/sisUsers.module';
import { ConfigModule } from '@nestjs/config';
import { ContactTypesModule } from './modules/contact-types/contact-types.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), SisUserModule, ContactTypesModule],

})
export class AppModule { }
