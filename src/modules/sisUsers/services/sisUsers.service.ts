import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { BaseService } from "src/shared/services/base.services";
import { SisUserAdaptor } from "../adaptors/sisUsers-data.adaptor";


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


}