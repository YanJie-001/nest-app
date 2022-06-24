import { CreateCoffeeDto } from './create-coffee.dto';
import { PartialType } from "@nestjs/mapped-types";
// 安装@nestjs/mapped-types 现在dto的继承需要使用该包

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}