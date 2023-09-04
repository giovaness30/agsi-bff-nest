import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { BaseService } from 'src/shared/services/base.services';
import { BodyUpdateContactType } from './dtos/update-contact-type.dto';
import { BodyCreateContactType } from './dtos/create-contact-Type.dto';

@Injectable()
export class ContactTypesService extends BaseService {
  constructor(private httpService: HttpService) {
    super(process.env.SAB_API);
  }

  getAllContactTypes(): Observable<any> {
    return this.httpService
      .get(this.getApiUrl('contact-type'))
      .pipe(map((data) => data?.data))
  }

  putContactType(items: BodyUpdateContactType) {
    return this.httpService
      .put(this.getApiUrl('contact-type'), items)
      .pipe(map((data) => data?.data))
  }

  postContactType(item: BodyCreateContactType) {
    return this.httpService
      .post(this.getApiUrl('contact-type'), item)
      .pipe(map((data) => data?.data))
  }

  deleteContactType(id: string) {
    return this.httpService
      .delete(this.getApiUrl(`contact-type/${id}`))
      .pipe(map((data) => data?.data))
  }
}
