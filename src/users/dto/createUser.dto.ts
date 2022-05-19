import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'testuser' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'testTEST asklfjlkahsdkh ' })
  @IsNotEmpty()
  description: string;
}
