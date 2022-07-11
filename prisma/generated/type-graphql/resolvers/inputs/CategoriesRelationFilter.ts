import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesWhereInput } from "../inputs/CategoriesWhereInput";

@TypeGraphQL.InputType("CategoriesRelationFilter", {
  isAbstract: true
})
export class CategoriesRelationFilter {
  @TypeGraphQL.Field(_type => CategoriesWhereInput, {
    nullable: true
  })
  is?: CategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesWhereInput, {
    nullable: true
  })
  isNot?: CategoriesWhereInput | undefined;
}
