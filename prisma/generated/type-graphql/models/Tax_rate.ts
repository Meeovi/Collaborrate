import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Products } from "../models/Products";

@TypeGraphQL.ObjectType("Tax_rate", {
  isAbstract: true
})
export class Tax_rate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tax_identifier!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  zip_post_is_range?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postcode?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rate_percent?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_store_view?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  prod_id!: bigint;

  products?: Products;
}
