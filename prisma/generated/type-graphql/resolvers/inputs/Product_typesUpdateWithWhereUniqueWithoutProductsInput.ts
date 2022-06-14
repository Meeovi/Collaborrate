import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_typesUpdateWithoutProductsInput } from "../inputs/Product_typesUpdateWithoutProductsInput";
import { Product_typesWhereUniqueInput } from "../inputs/Product_typesWhereUniqueInput";

@TypeGraphQL.InputType("Product_typesUpdateWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class Product_typesUpdateWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => Product_typesWhereUniqueInput, {
    nullable: false
  })
  where!: Product_typesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_typesUpdateWithoutProductsInput, {
    nullable: false
  })
  data!: Product_typesUpdateWithoutProductsInput;
}
