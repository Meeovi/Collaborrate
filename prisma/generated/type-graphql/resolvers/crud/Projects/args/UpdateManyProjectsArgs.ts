import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsUpdateManyMutationInput } from "../../../inputs/ProjectsUpdateManyMutationInput";
import { ProjectsWhereInput } from "../../../inputs/ProjectsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProjectsArgs {
  @TypeGraphQL.Field(_type => ProjectsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProjectsWhereInput, {
    nullable: true
  })
  where?: ProjectsWhereInput | undefined;
}
