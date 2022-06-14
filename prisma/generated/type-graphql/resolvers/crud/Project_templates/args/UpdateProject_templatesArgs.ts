import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Project_templatesUpdateInput } from "../../../inputs/Project_templatesUpdateInput";
import { Project_templatesWhereUniqueInput } from "../../../inputs/Project_templatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProject_templatesArgs {
  @TypeGraphQL.Field(_type => Project_templatesUpdateInput, {
    nullable: false
  })
  data!: Project_templatesUpdateInput;

  @TypeGraphQL.Field(_type => Project_templatesWhereUniqueInput, {
    nullable: false
  })
  where!: Project_templatesWhereUniqueInput;
}
