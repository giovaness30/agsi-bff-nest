import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { SisUserController } from "./controllers/sisUsers.controller";
import { SisUserService } from "./services/sisUsers.service";

@Module({
  imports: [HttpModule],
  controllers: [SisUserController],
  providers: [SisUserService],
})
export class SisUserModule { }