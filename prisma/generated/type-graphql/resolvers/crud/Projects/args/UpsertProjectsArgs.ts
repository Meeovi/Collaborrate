import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsCreateInput } from "../../../inputs/ProjectsCreateInput";
import { ProjectsUpdateInput } from "../../../inputs/ProjectsUpdateInput";
import { ProjectsWhereUniqueInput } from "../../../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProjectsArgs {
  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectsCreateInput, {
    nullable: false
  })
  create!: ProjectsCreateInput;

  @TypeGraphQL.Field(_type => ProjectsUpdateInput, {
    nullable: false
  })
  update!: ProjectsUpdateInput;
}
