import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Products } from "../models/Products";

@TypeGraphQL.ObjectType("Rating", {
  isAbstract: true
})
export class Rating {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_value?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_store_view?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rating_visibility?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  sort_order?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  prod_id!: bigint;

  products?: Products;
}
