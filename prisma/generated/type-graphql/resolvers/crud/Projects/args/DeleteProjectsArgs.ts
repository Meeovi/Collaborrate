import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsWhereUniqueInput } from "../../../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteProjectsArgs {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;
}
