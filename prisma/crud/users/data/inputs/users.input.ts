/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsNumber} from 'class-validator';
import {IsString} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class usersInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty()@IsString()
username: string;

@ApiProperty()@IsString()
first_name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
last_name?: string;

@ApiProperty()@IsString()
email: string;

@ApiProperty()@IsString()
password: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
interface_locale?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
value?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
permissions?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
emails?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
mediamanager?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
messages?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
projects?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
workspaces?: string;

}


export class CreateusersInput extends OmitType(usersInput, [] as const) {}


export class UpdateusersInput extends PartialType(CreateusersInput) {}

