import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("InvitationsMinAggregate", {
  isAbstract: true
})
export class InvitationsMinAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;

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
}
