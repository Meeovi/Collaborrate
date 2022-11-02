/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsNumber} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {IsString} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class ticketingInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
location?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
date?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
severity?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
team?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
requester?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
requester_email?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
department?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
media?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
projects?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
ticket_type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
comment?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
products?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
priority?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
status?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
resolution?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
assigned_to?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
date_modified?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
account_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
level?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
projects_projectsToticketing?: string;

}


export class CreateticketingInput extends OmitType(ticketingInput, [] as const) {}


export class UpdateticketingInput extends PartialType(CreateticketingInput) {}

