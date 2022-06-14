import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsWhereInput } from "../inputs/ProductsWhereInput";

@TypeGraphQL.InputType("ProductsListRelationFilter", {
  isAbstract: true
})
export class ProductsListRelationFilter {
  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  every?: ProductsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  some?: ProductsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  none?: ProductsWhereInput | undefined;
}
