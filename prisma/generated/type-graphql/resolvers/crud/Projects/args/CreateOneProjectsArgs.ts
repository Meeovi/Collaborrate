import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsCreateInput } from "../../../inputs/ProjectsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProjectsArgs {
  @TypeGraphQL.Field(_type => ProjectsCreateInput, {
    nullable: false
  })
  data!: ProjectsCreateInput;
}
