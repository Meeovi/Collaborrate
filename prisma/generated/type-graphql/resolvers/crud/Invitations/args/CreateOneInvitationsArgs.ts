import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationsCreateInput } from "../../../inputs/InvitationsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneInvitationsArgs {
  @TypeGraphQL.Field(_type => InvitationsCreateInput, {
    nullable: false
  })
  data!: InvitationsCreateInput;
}
