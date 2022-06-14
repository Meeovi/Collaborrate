import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImportmAvgAggregate } from "../outputs/ImportmAvgAggregate";
import { ImportmCountAggregate } from "../outputs/ImportmCountAggregate";
import { ImportmMaxAggregate } from "../outputs/ImportmMaxAggregate";
import { ImportmMinAggregate } from "../outputs/ImportmMinAggregate";
import { ImportmSumAggregate } from "../outputs/ImportmSumAggregate";

@TypeGraphQL.ObjectType("ImportmGroupBy", {
  isAbstract: true
})
export class ImportmGroupBy {
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
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  file!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => ImportmCountAggregate, {
    nullable: true
  })
  _count!: ImportmCountAggregate | null;

  @TypeGraphQL.Field(_type => ImportmAvgAggregate, {
    nullable: true
  })
  _avg!: ImportmAvgAggregate | null;

  @TypeGraphQL.Field(_type => ImportmSumAggregate, {
    nullable: true
  })
  _sum!: ImportmSumAggregate | null;

  @TypeGraphQL.Field(_type => ImportmMinAggregate, {
    nullable: true
  })
  _min!: ImportmMinAggregate | null;

  @TypeGraphQL.Field(_type => ImportmMaxAggregate, {
    nullable: true
  })
  _max!: ImportmMaxAggregate | null;
}
