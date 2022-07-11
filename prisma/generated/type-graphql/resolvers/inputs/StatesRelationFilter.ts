import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatesWhereInput } from "../inputs/StatesWhereInput";

@TypeGraphQL.InputType("StatesRelationFilter", {
  isAbstract: true
})
export class StatesRelationFilter {
  @TypeGraphQL.Field(_type => StatesWhereInput, {
    nullable: true
  })
  is?: StatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => StatesWhereInput, {
    nullable: true
  })
  isNot?: StatesWhereInput | undefined;
}
