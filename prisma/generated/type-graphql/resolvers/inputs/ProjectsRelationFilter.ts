import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsWhereInput } from "../inputs/ProjectsWhereInput";

@TypeGraphQL.InputType("ProjectsRelationFilter", {
  isAbstract: true
})
export class ProjectsRelationFilter {
  @TypeGraphQL.Field(_type => ProjectsWhereInput, {
    nullable: true
  })
  is?: ProjectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsWhereInput, {
    nullable: true
  })
  isNot?: ProjectsWhereInput | undefined;
}
