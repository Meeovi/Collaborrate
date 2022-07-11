import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentsAvgAggregate } from "../outputs/PaymentsAvgAggregate";
import { PaymentsCountAggregate } from "../outputs/PaymentsCountAggregate";
import { PaymentsMaxAggregate } from "../outputs/PaymentsMaxAggregate";
import { PaymentsMinAggregate } from "../outputs/PaymentsMinAggregate";
import { PaymentsSumAggregate } from "../outputs/PaymentsSumAggregate";

@TypeGraphQL.ObjectType("PaymentsGroupBy", {
  isAbstract: true
})
export class PaymentsGroupBy {
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
  client_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  host_uri!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  redirect_url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  redirect_url_app!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  active!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

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
