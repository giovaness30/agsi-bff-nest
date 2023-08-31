import { Controller, Get } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { catchError } from "rxjs";
import { errorResponseHelper } from "src/shared/helpers/error.response.helper";
import { SisUserService } from "../services/sisUsers.service";

@ApiTags('Usuários Sistema')
@Controller('/sisUsers')
export class SisUserController {
  constructor(private sisUserService: SisUserService) { }

  @Get()
  @ApiResponse({ status: 200, description: 'success!' })
  getAllUsers() {
    return this.sisUserService
      .getAllUsers()
      .pipe(catchError(errorResponseHelper));
  }
}