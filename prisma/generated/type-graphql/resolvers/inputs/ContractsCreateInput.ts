import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ContractsCreateInput", {
  isAbstract: true
})
export class ContractsCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract_title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract_value?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  end_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  renewal_reminder?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_signed_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company_signed_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract_manager?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  opportunity?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_items?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  total?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  discount?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtotal?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_tax?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grand_total?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;
}
