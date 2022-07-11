import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SurveysAvgAggregate } from "../outputs/SurveysAvgAggregate";
import { SurveysCountAggregate } from "../outputs/SurveysCountAggregate";
import { SurveysMaxAggregate } from "../outputs/SurveysMaxAggregate";
import { SurveysMinAggregate } from "../outputs/SurveysMinAggregate";
import { SurveysSumAggregate } from "../outputs/SurveysSumAggregate";

@TypeGraphQL.ObjectType("SurveysGroupBy", {
  isAbstract: true
})
export class SurveysGroupBy {
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
  assigned_to!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  question!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  answer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  submit_text!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  satisfied_text!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  neither_text!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dissatisfied_text!: string | null;

  @TypeGraphQL.Field(_type => SurveysCountAggregate, {
    nullable: true
  })
  _count!: SurveysCountAggregate | null;

  @TypeGraphQL.Field(_type => SurveysAvgAggregate, {
    nullable: true
  })
  _avg!: SurveysAvgAggregate | null;

  @TypeGraphQL.Field(_type => SurveysSumAggregate, {
    nullable: true
  })
  _sum!: SurveysSumAggregate | null;

  @TypeGraphQL.Field(_type => SurveysMinAggregate, {
    nullable: true
  })
  _min!: SurveysMinAggregate | null;

  @TypeGraphQL.Field(_type => SurveysMaxAggregate, {
    nullable: true
  })
  _max!: SurveysMaxAggregate | null;
}
