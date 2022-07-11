import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsUpdateInput } from "../../../inputs/ProjectsUpdateInput";
import { ProjectsWhereUniqueInput } from "../../../inputs/ProjectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProjectsArgs {
  @TypeGraphQL.Field(_type => ProjectsUpdateInput, {
    nullable: false
  })
  data!: ProjectsUpdateInput;

  @TypeGraphQL.Field(_type => ProjectsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectsWhereUniqueInput;
}
