/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {IsNumber} from 'class-validator';
import {IsString} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class transactionsInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty()@IsInt()
order_id: number;

@ApiProperty()@IsInt()
transaction_id: number;

@ApiProperty()@IsInt()
parent_transaction_id: number;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created?: Date;

@ApiProperty()@IsNumber()
payment_method: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
closed?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customer_payment?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
orders?: string;

}


export class CreatetransactionsInput extends OmitType(transactionsInput, [] as const) {}


export class UpdatetransactionsInput extends PartialType(CreatetransactionsInput) {}

