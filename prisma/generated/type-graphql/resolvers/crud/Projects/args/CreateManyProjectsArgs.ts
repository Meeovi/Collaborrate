import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectsCreateManyInput } from "../../../inputs/ProjectsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProjectsArgs {
  @TypeGraphQL.Field(_type => [ProjectsCreateManyInput], {
    nullable: false
  })
  data!: ProjectsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
