import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customers } from "../models/Customers";

@TypeGraphQL.ObjectType("Newsletter_subscribers", {
  isAbstract: true
})
export class Newsletter_subscribers {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_first_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_last_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websites?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cust_id!: number;

  customers?: Customers;
}
