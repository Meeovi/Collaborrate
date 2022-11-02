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
import {IsInt} from 'class-validator';
import {IsBoolean} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class workspacesInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
code?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsInt()
customers?: number;

@ApiProperty({"required":false})@IsOptional()@IsInt()
users?: number;

@ApiProperty({"required":false})@IsOptional()@IsNumber()
products?: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsNumber()
tasks?: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsNumber()
brands?: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsInt()
shops?: number;

@ApiProperty({"required":false})@IsOptional()@IsInt()
category?: number;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
isPublic?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsNumber()
projects?: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
author?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
media?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
brands_brandsToworkspaces?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
categories?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers_customersToworkspaces?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
products_productsToworkspaces?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
projects_projectsToworkspaces?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shops_shopsToworkspaces?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tasks_tasksToworkspaces?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
users_usersToworkspaces?: string;

}


export class CreateworkspacesInput extends OmitType(workspacesInput, [] as const) {}


export class UpdateworkspacesInput extends PartialType(CreateworkspacesInput) {}

