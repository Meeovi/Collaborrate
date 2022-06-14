import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Project_templatesCreateInput } from "../../../inputs/Project_templatesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProject_templatesArgs {
  @TypeGraphQL.Field(_type => Project_templatesCreateInput, {
    nullable: false
  })
  data!: Project_templatesCreateInput;
}
