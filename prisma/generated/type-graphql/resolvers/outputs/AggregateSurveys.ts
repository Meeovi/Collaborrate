import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SurveysAvgAggregate } from "../outputs/SurveysAvgAggregate";
import { SurveysCountAggregate } from "../outputs/SurveysCountAggregate";
import { SurveysMaxAggregate } from "../outputs/SurveysMaxAggregate";
import { SurveysMinAggregate } from "../outputs/SurveysMinAggregate";
import { SurveysSumAggregate } from "../outputs/SurveysSumAggregate";

@TypeGraphQL.ObjectType("AggregateSurveys", {
  isAbstract: true
})
export class AggregateSurveys {
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
