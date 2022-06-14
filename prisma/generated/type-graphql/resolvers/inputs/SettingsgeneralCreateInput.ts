import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SettingsgeneralCreateInput", {
  isAbstract: true
})
export class SettingsgeneralCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  site_title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  site_tagline?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  site_website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  aws_s3?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  google_drive?: string | undefined;
}
