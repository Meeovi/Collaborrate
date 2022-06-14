import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgreementsAvgAggregate } from "../outputs/AgreementsAvgAggregate";
import { AgreementsCountAggregate } from "../outputs/AgreementsCountAggregate";
import { AgreementsMaxAggregate } from "../outputs/AgreementsMaxAggregate";
import { AgreementsMinAggregate } from "../outputs/AgreementsMinAggregate";
import { AgreementsSumAggregate } from "../outputs/AgreementsSumAggregate";

@TypeGraphQL.ObjectType("AggregateAgreements", {
  isAbstract: true
})
export class AggregateAgreements {
  @TypeGraphQL.Field(_type => AgreementsCountAggregate, {
    nullable: true
  })
  _count!: AgreementsCountAggregate | null;

  @TypeGraphQL.Field(_type => AgreementsAvgAggregate, {
    nullable: true
  })
  _avg!: AgreementsAvgAggregate | null;

  @TypeGraphQL.Field(_type => AgreementsSumAggregate, {
    nullable: true
  })
  _sum!: AgreementsSumAggregate | null;

  @TypeGraphQL.Field(_type => AgreementsMinAggregate, {
    nullable: true
  })
  _min!: AgreementsMinAggregate | null;

  @TypeGraphQL.Field(_type => AgreementsMaxAggregate, {
    nullable: true
  })
  _max!: AgreementsMaxAggregate | null;
}
