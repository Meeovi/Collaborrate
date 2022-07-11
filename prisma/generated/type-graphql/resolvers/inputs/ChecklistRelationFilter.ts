import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChecklistWhereInput } from "../inputs/ChecklistWhereInput";

@TypeGraphQL.InputType("ChecklistRelationFilter", {
  isAbstract: true
})
export class ChecklistRelationFilter {
  @TypeGraphQL.Field(_type => ChecklistWhereInput, {
    nullable: true
  })
  is?: ChecklistWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChecklistWhereInput, {
    nullable: true
  })
  isNot?: ChecklistWhereInput | undefined;
}
