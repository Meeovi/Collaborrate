import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasesAvgAggregate } from "../outputs/CasesAvgAggregate";
import { CasesCountAggregate } from "../outputs/CasesCountAggregate";
import { CasesMaxAggregate } from "../outputs/CasesMaxAggregate";
import { CasesMinAggregate } from "../outputs/CasesMinAggregate";
import { CasesSumAggregate } from "../outputs/CasesSumAggregate";

@TypeGraphQL.ObjectType("CasesGroupBy", {
  isAbstract: true
})
export class CasesGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  case_number!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resolution!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_modified!: Date | null;

  @TypeGraphQL.Field(_type => CasesCountAggregate, {
    nullable: true
  })
  _count!: CasesCountAggregate | null;

  @TypeGraphQL.Field(_type => CasesAvgAggregate, {
    nullable: true
  })
  _avg!: CasesAvgAggregate | null;

  @TypeGraphQL.Field(_type => CasesSumAggregate, {
    nullable: true
  })
  _sum!: CasesSumAggregate | null;

  @TypeGraphQL.Field(_type => CasesMinAggregate, {
    nullable: true
  })
  _min!: CasesMinAggregate | null;

  @TypeGraphQL.Field(_type => CasesMaxAggregate, {
    nullable: true
  })
  _max!: CasesMaxAggregate | null;
}
