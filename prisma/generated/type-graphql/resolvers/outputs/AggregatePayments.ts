import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentsAvgAggregate } from "../outputs/PaymentsAvgAggregate";
import { PaymentsCountAggregate } from "../outputs/PaymentsCountAggregate";
import { PaymentsMaxAggregate } from "../outputs/PaymentsMaxAggregate";
import { PaymentsMinAggregate } from "../outputs/PaymentsMinAggregate";
import { PaymentsSumAggregate } from "../outputs/PaymentsSumAggregate";

@TypeGraphQL.ObjectType("AggregatePayments", {
  isAbstract: true
})
export class AggregatePayments {
  @TypeGraphQL.Field(_type => PaymentsCountAggregate, {
    nullable: true
  })
  _count!: PaymentsCountAggregate | null;

  @TypeGraphQL.Field(_type => PaymentsAvgAggregate, {
    nullable: true
  })
  _avg!: PaymentsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PaymentsSumAggregate, {
    nullable: true
  })
  _sum!: PaymentsSumAggregate | null;

  @TypeGraphQL.Field(_type => PaymentsMinAggregate, {
    nullable: true
  })
  _min!: PaymentsMinAggregate | null;

  @TypeGraphQL.Field(_type => PaymentsMaxAggregate, {
    nullable: true
  })
  _max!: PaymentsMaxAggregate | null;
}
