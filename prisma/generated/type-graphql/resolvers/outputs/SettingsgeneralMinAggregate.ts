import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SettingsgeneralMinAggregate", {
  isAbstract: true
})
export class SettingsgeneralMinAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  site_title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  site_tagline!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  site_website!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  aws_s3!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  google_drive!: string | null;
}
