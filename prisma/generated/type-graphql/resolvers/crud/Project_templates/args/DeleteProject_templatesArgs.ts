import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Project_templatesWhereUniqueInput } from "../../../inputs/Project_templatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteProject_templatesArgs {
  @TypeGraphQL.Field(_type => Project_templatesWhereUniqueInput, {
    nullable: false
  })
  where!: Project_templatesWhereUniqueInput;
}
