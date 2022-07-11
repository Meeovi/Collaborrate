import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customers } from "../models/Customers";
import { Products } from "../models/Products";
import { Quotes } from "../models/Quotes";
import { Transactions } from "../models/Transactions";
import { OrdersCount } from "../resolvers/outputs/OrdersCount";

@TypeGraphQL.ObjectType("Orders", {
  isAbstract: true
})
export class Orders {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  purchase_point?: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  purchase_date?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bill_to_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ship_to_name?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  grand_total_base?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  grand_total_purchased?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  status?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  action?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allocated_sources?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  braintree_transaction_source?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cust_id!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  prod_id!: bigint;

  customers?: Customers;

  products?: Products;

  quotes?: Quotes[];

  transactions?: Transactions[];

  @TypeGraphQL.Field(_type => OrdersCount, {
    nullable: true
  })
  _count?: OrdersCount | null;
}
