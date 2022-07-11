import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("InvitationsCreateInput", {
  isAbstract: true
})
export class InvitationsCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  invoiceDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billingAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shippingAddress?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orderNumber?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grandTotalPurchased?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  paymentMethod?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;
}
