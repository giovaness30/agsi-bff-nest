import { ApiProperty } from "@nestjs/swagger";

export class BodyUpdateContactType {

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string
}