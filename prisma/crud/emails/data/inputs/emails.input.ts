/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {IsString} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class emailsInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
subject?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty()@IsInt()
cust_id: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
bcc?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
cc?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
from?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
media?: string;

@ApiProperty({"required":false})@IsOptional()@IsInt()
staff_id?: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
users?: string;

}


export class CreateemailsInput extends OmitType(emailsInput, [] as const) {}


export class UpdateemailsInput extends PartialType(CreateemailsInput) {}

