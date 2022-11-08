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


export class eventsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tickets?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
image?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
start?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
end?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
category?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
city?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
state?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
postalcode?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
invitationEmail?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
invitationBillingAddress?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
invitationGrandTotalPurchased?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
invitationInvoiceDate?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
invitationOrderNumber?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
invitationPaymentMethod?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
invitationShippingAddress?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
invitationCustomerName?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
invitationStatus?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
media?: string;

}


export class CreateeventsInput extends OmitType(eventsInput, [] as const) {}


export class UpdateeventsInput extends PartialType(CreateeventsInput) {}

