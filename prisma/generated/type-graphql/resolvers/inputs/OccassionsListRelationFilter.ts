import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsWhereInput } from "../inputs/OccassionsWhereInput";

@TypeGraphQL.InputType("OccassionsListRelationFilter", {
  isAbstract: true
})
export class OccassionsListRelationFilter {
  @TypeGraphQL.Field(_type => OccassionsWhereInput, {
    nullable: true
  })
  every?: OccassionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => OccassionsWhereInput, {
    nullable: true
  })
  some?: OccassionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => OccassionsWhereInput, {
    nullable: true
  })
  none?: OccassionsWhereInput | undefined;
}
