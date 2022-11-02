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


export class settingsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
store_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
store_phone?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
store_hours?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
region?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
zipcode?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
city?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
address?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
address_two?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
vat_number?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
allow_state?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
state_required_for?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
allow_countries?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
default_country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
optional_zip?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
european_union_countries?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
top_destinations?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
base_currency?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
default_currency?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
allowed_currency?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
siteName?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
siteWebsite?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
sentryDsn?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
awsS3?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
databaseUrl?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
isPublic?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
googleAnalytics?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
searchSetting?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
mailServer?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
youtubeVideos?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
siteTagline?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
googleDrive?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
disqusKey?: string;

}


export class CreatesettingsInput extends OmitType(settingsInput, [] as const) {}


export class UpdatesettingsInput extends PartialType(CreatesettingsInput) {}

