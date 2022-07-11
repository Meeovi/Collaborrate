import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationsUpdateInput } from "../../../inputs/InvitationsUpdateInput";
import { InvitationsWhereUniqueInput } from "../../../inputs/InvitationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneInvitationsArgs {
  @TypeGraphQL.Field(_type => InvitationsUpdateInput, {
    nullable: false
  })
  data!: InvitationsUpdateInput;

  @TypeGraphQL.Field(_type => InvitationsWhereUniqueInput, {
    nullable: false
  })
  where!: InvitationsWhereUniqueInput;
}
