import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationsWhereInput } from "../../../inputs/InvitationsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyInvitationsArgs {
  @TypeGraphQL.Field(_type => InvitationsWhereInput, {
    nullable: true
  })
  where?: InvitationsWhereInput | undefined;
}
