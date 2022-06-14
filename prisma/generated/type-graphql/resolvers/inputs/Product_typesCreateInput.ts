import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateNestedOneWithoutProduct_typesInput } from "../inputs/ProductsCreateNestedOneWithoutProduct_typesInput";

@TypeGraphQL.InputType("Product_typesCreateInput", {
  isAbstract: true
})
export class Product_typesCreateInput {
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

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutProduct_typesInput, {
    nullable: true
  })
  products?: ProductsCreateNestedOneWithoutProduct_typesInput | undefined;
}
