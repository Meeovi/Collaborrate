import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customer_payment } from "../models/Customer_payment";
import { Orders } from "../models/Orders";

@TypeGraphQL.ObjectType("Transactions", {
  isAbstract: true
})
export class Transactions {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  transaction_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  parent_transaction_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created?: Date | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  payment_method!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  closed?: string | null;

  orders?: Orders;

  customer_payment?: Customer_payment;
}
