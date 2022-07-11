import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspacesUpdateManyMutationInput } from "../../../inputs/WorkspacesUpdateManyMutationInput";
import { WorkspacesWhereInput } from "../../../inputs/WorkspacesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWorkspacesArgs {
  @TypeGraphQL.Field(_type => WorkspacesUpdateManyMutationInput, {
    nullable: false
  })
  data!: WorkspacesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WorkspacesWhereInput, {
    nullable: true
  })
  where?: WorkspacesWhereInput | undefined;
}
