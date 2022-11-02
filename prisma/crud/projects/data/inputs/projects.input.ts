/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsNumber} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsString} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {IsInt} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class projectsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
project_manager?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
start_date?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
end_date?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
resource?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
considerworkingdays?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
project_template?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
status?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
assignee?: string;

@ApiProperty({"required":false})@IsOptional()@IsInt()
cust_id?: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
doing?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
done?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
goal_collaborators?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
goal_measurement?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
goal_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
goal_privacy?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
goal_progress_source?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
goal_timeperiod?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
goal_updatemethod?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
priority?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
section_rule?: string;

@ApiProperty({"required":false})@IsOptional()@IsInt()
staff_id?: number;

@ApiProperty({"required":false})@IsOptional()@IsNumber()
task_id?: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsNumber()
ticket_id?: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tasks?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
ticketing?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
users?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
workspaces?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tags?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
product?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
websites?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
method?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
zone?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
team?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
categories?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
company?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
file?: string;

}


export class CreateprojectsInput extends OmitType(projectsInput, [] as const) {}


export class UpdateprojectsInput extends PartialType(CreateprojectsInput) {}

