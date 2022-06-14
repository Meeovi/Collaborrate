import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("OrdersMinAggregate", {
  isAbstract: true
})
export class OrdersMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  purchase_point!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  purchase_date!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bill_to_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ship_to_name!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  grand_total_base!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  grand_total_purchased!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  status!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  action!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allocated_sources!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  braintree_transaction_source!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  cust_id!: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  prod_id!: bigint | null;
}
