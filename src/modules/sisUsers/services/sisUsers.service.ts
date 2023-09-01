import { HttpService } from "@nestjs/axios";
import { Body, Injectable } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { BaseService } from "src/shared/services/base.services";
import { SisUserAdaptor } from "../adaptors/sisUsers-data.adaptor";
import { BodyArrayUpdateSisPermissions } from "../models/dtos/bodyArrayUpdateSisUserPermissions.dto";
import { PermissionsModel } from "../models/view-models/updateSisPermissions.model";


@Injectable()
export class SisUserService extends BaseService {
  constructor(private httpService: HttpService) {
    super('http://192.168.10.101:8020/sab-api')
  }

  getAllUsers(): Observable<any> {
    return this.httpService
      .get(this.getApiUrl('sisUsers'))
      .pipe(map((data) => SisUserAdaptor.listAll(data?.data?.data)))
  }

  getSisUserPermissions(): Observable<any> {
    return this.httpService
      .get(this.getApiUrl('sisUsers/permissions'))
      .pipe(map((data) => data?.data))
  }
  putSisUserPermissions(items: BodyArrayUpdateSisPermissions) {
    return this.httpService
      .put(this.getApiUrl('sisUsers/permissions'), items)
      .pipe(map((data) => data?.data))
  }


}