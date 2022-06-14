import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerAvgAggregate } from "../outputs/MediamanagerAvgAggregate";
import { MediamanagerCountAggregate } from "../outputs/MediamanagerCountAggregate";
import { MediamanagerMaxAggregate } from "../outputs/MediamanagerMaxAggregate";
import { MediamanagerMinAggregate } from "../outputs/MediamanagerMinAggregate";
import { MediamanagerSumAggregate } from "../outputs/MediamanagerSumAggregate";

@TypeGraphQL.ObjectType("MediamanagerGroupBy", {
  isAbstract: true
})
export class MediamanagerGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keywords!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  brands!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  expiration_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  copyright!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensions!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  author!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content_type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  versions!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  watermark_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  watermark_description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  watermark_media!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  agreements!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  albums!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  comment!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  workspace!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  task_name!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task_description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task_type!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  members!: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  products!: bigint | null;

  @TypeGraphQL.Field(_type => MediamanagerCountAggregate, {
    nullable: true
  })
  _count!: MediamanagerCountAggregate | null;

  @TypeGraphQL.Field(_type => MediamanagerAvgAggregate, {
    nullable: true
  })
  _avg!: MediamanagerAvgAggregate | null;

  @TypeGraphQL.Field(_type => MediamanagerSumAggregate, {
    nullable: true
  })
  _sum!: MediamanagerSumAggregate | null;

  @TypeGraphQL.Field(_type => MediamanagerMinAggregate, {
    nullable: true
  })
  _min!: MediamanagerMinAggregate | null;

  @TypeGraphQL.Field(_type => MediamanagerMaxAggregate, {
    nullable: true
  })
  _max!: MediamanagerMaxAggregate | null;
}
