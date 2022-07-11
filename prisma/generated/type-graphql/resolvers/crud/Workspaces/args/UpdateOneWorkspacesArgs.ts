import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspacesUpdateInput } from "../../../inputs/WorkspacesUpdateInput";
import { WorkspacesWhereUniqueInput } from "../../../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWorkspacesArgs {
  @TypeGraphQL.Field(_type => WorkspacesUpdateInput, {
    nullable: false
  })
  data!: WorkspacesUpdateInput;

  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;
}
