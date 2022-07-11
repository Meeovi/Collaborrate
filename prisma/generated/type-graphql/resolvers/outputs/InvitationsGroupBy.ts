import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationsAvgAggregate } from "../outputs/InvitationsAvgAggregate";
import { InvitationsCountAggregate } from "../outputs/InvitationsCountAggregate";
import { InvitationsMaxAggregate } from "../outputs/InvitationsMaxAggregate";
import { InvitationsMinAggregate } from "../outputs/InvitationsMinAggregate";
import { InvitationsSumAggregate } from "../outputs/InvitationsSumAggregate";

@TypeGraphQL.ObjectType("InvitationsGroupBy", {
  isAbstract: true
})
export class InvitationsGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  invoiceDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billingAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shippingAddress!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderNumber!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grandTotalPurchased!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  paymentMethod!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => InvitationsCountAggregate, {
    nullable: true
  })
  _count!: InvitationsCountAggregate | null;

  @TypeGraphQL.Field(_type => InvitationsAvgAggregate, {
    nullable: true
  })
  _avg!: InvitationsAvgAggregate | null;

  @TypeGraphQL.Field(_type => InvitationsSumAggregate, {
    nullable: true
  })
  _sum!: InvitationsSumAggregate | null;

  @TypeGraphQL.Field(_type => InvitationsMinAggregate, {
    nullable: true
  })
  _min!: InvitationsMinAggregate | null;

  @TypeGraphQL.Field(_type => InvitationsMaxAggregate, {
    nullable: true
  })
  _max!: InvitationsMaxAggregate | null;
}
