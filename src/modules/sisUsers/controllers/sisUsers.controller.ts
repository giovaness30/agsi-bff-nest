import { Body, Controller, Get, Put } from "@nestjs/common";
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { catchError } from "rxjs";
import { errorResponseHelper } from "src/shared/helpers/error.response.helper";
import { SisUserService } from "../services/sisUsers.service";
import { BodyArrayUpdateSisPermissions } from "../models/dtos/bodyArrayUpdateSisUserPermissions.dto";
import { PermissionsModel } from "../models/view-models/updateSisPermissions.model";

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

  @Get('/permissions')
  getSisUserPermissions() {
    return this.sisUserService
      .getSisUserPermissions()
      .pipe(catchError(errorResponseHelper));
  }

  @Put('/permissions')
  @ApiOperation({ summary: 'Altera as Permissões de Usuários', description: 'Altera as Permissões de Usuários' })
  async updateSisUsersPermissions(@Body() items: PermissionsModel) {
    return await this.sisUserService.putSisUserPermissions(items)
  }


}