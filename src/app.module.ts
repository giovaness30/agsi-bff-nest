import { Module } from '@nestjs/common';
import { SisUserModule } from './modules/sisUsers/sisUsers.module';

@Module({
  imports: [SisUserModule],

})
export class AppModule { }
