import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspacesWhereInput } from "../../../inputs/WorkspacesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWorkspacesArgs {
  @TypeGraphQL.Field(_type => WorkspacesWhereInput, {
    nullable: true
  })
  where?: WorkspacesWhereInput | undefined;
}
