import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_typesWhereInput } from "../inputs/Product_typesWhereInput";

@TypeGraphQL.InputType("Product_typesListRelationFilter", {
  isAbstract: true
})
export class Product_typesListRelationFilter {
  @TypeGraphQL.Field(_type => Product_typesWhereInput, {
    nullable: true
  })
  every?: Product_typesWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_typesWhereInput, {
    nullable: true
  })
  some?: Product_typesWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_typesWhereInput, {
    nullable: true
  })
  none?: Product_typesWhereInput | undefined;
}
