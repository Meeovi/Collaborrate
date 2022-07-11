import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsWhereInput } from "../inputs/ProductsWhereInput";

@TypeGraphQL.InputType("ProductsRelationFilter", {
  isAbstract: true
})
export class ProductsRelationFilter {
  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  is?: ProductsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  isNot?: ProductsWhereInput | undefined;
}
