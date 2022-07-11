import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationsCreateInput } from "../../../inputs/InvitationsCreateInput";
import { InvitationsUpdateInput } from "../../../inputs/InvitationsUpdateInput";
import { InvitationsWhereUniqueInput } from "../../../inputs/InvitationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneInvitationsArgs {
  @TypeGraphQL.Field(_type => InvitationsWhereUniqueInput, {
    nullable: false
  })
  where!: InvitationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => InvitationsCreateInput, {
    nullable: false
  })
  create!: InvitationsCreateInput;

  @TypeGraphQL.Field(_type => InvitationsUpdateInput, {
    nullable: false
  })
  update!: InvitationsUpdateInput;
}
