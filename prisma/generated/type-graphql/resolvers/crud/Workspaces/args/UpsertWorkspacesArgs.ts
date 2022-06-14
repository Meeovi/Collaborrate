import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspacesCreateInput } from "../../../inputs/WorkspacesCreateInput";
import { WorkspacesUpdateInput } from "../../../inputs/WorkspacesUpdateInput";
import { WorkspacesWhereUniqueInput } from "../../../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertWorkspacesArgs {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesCreateInput, {
    nullable: false
  })
  create!: WorkspacesCreateInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateInput, {
    nullable: false
  })
  update!: WorkspacesUpdateInput;
}
