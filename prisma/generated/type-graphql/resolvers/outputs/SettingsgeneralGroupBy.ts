import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsgeneralAvgAggregate } from "../outputs/SettingsgeneralAvgAggregate";
import { SettingsgeneralCountAggregate } from "../outputs/SettingsgeneralCountAggregate";
import { SettingsgeneralMaxAggregate } from "../outputs/SettingsgeneralMaxAggregate";
import { SettingsgeneralMinAggregate } from "../outputs/SettingsgeneralMinAggregate";
import { SettingsgeneralSumAggregate } from "../outputs/SettingsgeneralSumAggregate";

@TypeGraphQL.ObjectType("SettingsgeneralGroupBy", {
  isAbstract: true
})
export class SettingsgeneralGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

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

  @TypeGraphQL.Field(_type => SettingsgeneralCountAggregate, {
    nullable: true
  })
  _count!: SettingsgeneralCountAggregate | null;

  @TypeGraphQL.Field(_type => SettingsgeneralAvgAggregate, {
    nullable: true
  })
  _avg!: SettingsgeneralAvgAggregate | null;

  @TypeGraphQL.Field(_type => SettingsgeneralSumAggregate, {
    nullable: true
  })
  _sum!: SettingsgeneralSumAggregate | null;

  @TypeGraphQL.Field(_type => SettingsgeneralMinAggregate, {
    nullable: true
  })
  _min!: SettingsgeneralMinAggregate | null;

  @TypeGraphQL.Field(_type => SettingsgeneralMaxAggregate, {
    nullable: true
  })
  _max!: SettingsgeneralMaxAggregate | null;
}
