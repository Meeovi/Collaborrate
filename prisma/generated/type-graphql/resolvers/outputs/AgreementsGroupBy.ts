import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgreementsAvgAggregate } from "../outputs/AgreementsAvgAggregate";
import { AgreementsCountAggregate } from "../outputs/AgreementsCountAggregate";
import { AgreementsMaxAggregate } from "../outputs/AgreementsMaxAggregate";
import { AgreementsMinAggregate } from "../outputs/AgreementsMinAggregate";
import { AgreementsSumAggregate } from "../outputs/AgreementsSumAggregate";

@TypeGraphQL.ObjectType("AgreementsGroupBy", {
  isAbstract: true
})
export class AgreementsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  reference_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  excerpt!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  user_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  shop_id!: number;

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
