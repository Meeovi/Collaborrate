import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsWhereInput } from "../inputs/ProjectsWhereInput";

@TypeGraphQL.InputType("ProjectsListRelationFilter", {
  isAbstract: true
})
export class ProjectsListRelationFilter {
  @TypeGraphQL.Field(_type => ProjectsWhereInput, {
    nullable: true
  })
  every?: ProjectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsWhereInput, {
    nullable: true
  })
  some?: ProjectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsWhereInput, {
    nullable: true
  })
  none?: ProjectsWhereInput | undefined;
}
