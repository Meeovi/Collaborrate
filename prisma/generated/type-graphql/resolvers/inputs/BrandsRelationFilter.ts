import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsWhereInput } from "../inputs/BrandsWhereInput";

@TypeGraphQL.InputType("BrandsRelationFilter", {
  isAbstract: true
})
export class BrandsRelationFilter {
  @TypeGraphQL.Field(_type => BrandsWhereInput, {
    nullable: true
  })
  is?: BrandsWhereInput | undefined;

  @TypeGraphQL.Field(_type => BrandsWhereInput, {
    nullable: true
  })
  isNot?: BrandsWhereInput | undefined;
}
