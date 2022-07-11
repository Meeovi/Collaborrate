import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Project_templatesCreateInput } from "../../../inputs/Project_templatesCreateInput";
import { Project_templatesUpdateInput } from "../../../inputs/Project_templatesUpdateInput";
import { Project_templatesWhereUniqueInput } from "../../../inputs/Project_templatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProject_templatesArgs {
  @TypeGraphQL.Field(_type => Project_templatesWhereUniqueInput, {
    nullable: false
  })
  where!: Project_templatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Project_templatesCreateInput, {
    nullable: false
  })
  create!: Project_templatesCreateInput;

  @TypeGraphQL.Field(_type => Project_templatesUpdateInput, {
    nullable: false
  })
  update!: Project_templatesUpdateInput;
}
