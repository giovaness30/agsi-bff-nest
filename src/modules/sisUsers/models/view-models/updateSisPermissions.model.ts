import { ApiProperty } from "@nestjs/swagger";


export class PermissionsModel {
  @ApiProperty()
  key: string;

  @ApiProperty()
  rulesDoubt: boolean;

  @ApiProperty()
  depart: boolean;

  @ApiProperty()
  confidentialData: boolean;
}