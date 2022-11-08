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


export class wishlistsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
visibility?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
products?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
quantity?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
occassions?: string;

}


export class CreatewishlistsInput extends OmitType(wishlistsInput, [] as const) {}


export class UpdatewishlistsInput extends PartialType(CreatewishlistsInput) {}

