import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspacesCreateInput } from "../../../inputs/WorkspacesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWorkspacesArgs {
  @TypeGraphQL.Field(_type => WorkspacesCreateInput, {
    nullable: false
  })
  data!: WorkspacesCreateInput;
}
