import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Products } from "../models/Products";

@TypeGraphQL.ObjectType("Product_types", {
  isAbstract: true
})
export class Product_types {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxes?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isShippable?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filter_options?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_type?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  prod_id!: bigint;

  products?: Products;
}