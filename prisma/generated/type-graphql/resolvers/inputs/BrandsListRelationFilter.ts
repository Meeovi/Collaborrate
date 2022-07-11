import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsWhereInput } from "../inputs/BrandsWhereInput";

@TypeGraphQL.InputType("BrandsListRelationFilter", {
  isAbstract: true
})
export class BrandsListRelationFilter {
  @TypeGraphQL.Field(_type => BrandsWhereInput, {
    nullable: true
  })
  every?: BrandsWhereInput | undefined;

  @TypeGraphQL.Field(_type => BrandsWhereInput, {
    nullable: true
  })
  some?: BrandsWhereInput | undefined;

  @TypeGraphQL.Field(_type => BrandsWhereInput, {
    nullable: true
  })
  none?: BrandsWhereInput | undefined;
}
