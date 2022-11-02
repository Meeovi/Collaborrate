/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsString} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class customersInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
thumbnail?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
name_prefix?: string;

@ApiProperty()@IsString()
first_name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
middle_name?: string;

@ApiProperty()@IsString()
last_name: string;

@ApiProperty()@IsString()
email: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customer_group?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
phone?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
zipcode?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
name_suffix?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
websites?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
product?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
state?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
customer_since?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
confirmed_email?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
date_of_birth?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tax_vat_number?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
gender?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
short_description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
image?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
Address?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
address_two?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
payment_type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
username?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
password?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
comments?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
credit_memos?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customer_payment?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
emails?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
mediamanager?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
messages?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
newsletter_subscribers?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
orders?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
projects?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
quotes?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
returns?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
workspaces?: string;

}


export class CreatecustomersInput extends OmitType(customersInput, [] as const) {}


export class UpdatecustomersInput extends PartialType(CreatecustomersInput) {}

