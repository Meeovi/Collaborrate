import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Product_typesCreateManyProductsInput", {
  isAbstract: true
})
export class Product_typesCreateManyProductsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  taxes?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isShippable?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filter_options?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_type?: string | undefined;
}
