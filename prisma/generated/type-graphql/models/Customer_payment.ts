import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customers } from "../models/Customers";
import { Transactions } from "../models/Transactions";
import { Customer_paymentCount } from "../resolvers/outputs/Customer_paymentCount";

@TypeGraphQL.ObjectType("Customer_payment", {
  isAbstract: true
})
export class Customer_payment {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cust_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_info?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  provider?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  account_no!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  expiry?: bigint | null;

  customers?: Customers;

  transactions?: Transactions[];

  @TypeGraphQL.Field(_type => Customer_paymentCount, {
    nullable: true
  })
  _count?: Customer_paymentCount | null;
}
