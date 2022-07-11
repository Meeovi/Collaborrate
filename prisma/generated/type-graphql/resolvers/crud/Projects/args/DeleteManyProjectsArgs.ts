import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsWhereInput } from "../../../inputs/ProjectsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProjectsArgs {
  @TypeGraphQL.Field(_type => ProjectsWhereInput, {
    nullable: true
  })
  where?: ProjectsWhereInput | undefined;
}
