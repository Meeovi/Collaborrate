import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("InvoicesCreateManyInput", {
  isAbstract: true
})
export class InvoicesCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  invoice?: number | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  order_number?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  invoice_date?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bill_to_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billing_address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grand_total_base?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grand_total_purchased?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_group?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_method?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_information?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtotal?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_and_handling?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;
}
