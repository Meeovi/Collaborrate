import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsWhereInput } from "../inputs/ReturnsWhereInput";

@TypeGraphQL.InputType("ReturnsListRelationFilter", {
  isAbstract: true
})
export class ReturnsListRelationFilter {
  @TypeGraphQL.Field(_type => ReturnsWhereInput, {
    nullable: true
  })
  every?: ReturnsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsWhereInput, {
    nullable: true
  })
  some?: ReturnsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsWhereInput, {
    nullable: true
  })
  none?: ReturnsWhereInput | undefined;
}
