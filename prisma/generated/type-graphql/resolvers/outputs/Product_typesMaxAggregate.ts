import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Product_typesMaxAggregate", {
  isAbstract: true
})
export class Product_typesMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxes!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isShippable!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filter_options!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_type!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  prod_id!: bigint | null;
}
