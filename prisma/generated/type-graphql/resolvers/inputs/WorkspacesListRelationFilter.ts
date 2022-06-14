import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesWhereInput } from "../inputs/WorkspacesWhereInput";

@TypeGraphQL.InputType("WorkspacesListRelationFilter", {
  isAbstract: true
})
export class WorkspacesListRelationFilter {
  @TypeGraphQL.Field(_type => WorkspacesWhereInput, {
    nullable: true
  })
  every?: WorkspacesWhereInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesWhereInput, {
    nullable: true
  })
  some?: WorkspacesWhereInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesWhereInput, {
    nullable: true
  })
  none?: WorkspacesWhereInput | undefined;
}
