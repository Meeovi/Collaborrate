import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShopsWhereInput } from "../inputs/ShopsWhereInput";

@TypeGraphQL.InputType("ShopsRelationFilter", {
  isAbstract: true
})
export class ShopsRelationFilter {
  @TypeGraphQL.Field(_type => ShopsWhereInput, {
    nullable: true
  })
  is?: ShopsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShopsWhereInput, {
    nullable: true
  })
  isNot?: ShopsWhereInput | undefined;
}
