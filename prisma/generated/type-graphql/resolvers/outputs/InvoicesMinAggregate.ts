import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("InvoicesMinAggregate", {
  isAbstract: true
})
export class InvoicesMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoice!: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  order_number!: bigint | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  invoice_date!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bill_to_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billing_address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grand_total_base!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grand_total_purchased!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_group!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_method!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_information!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtotal!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_and_handling!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;
}
