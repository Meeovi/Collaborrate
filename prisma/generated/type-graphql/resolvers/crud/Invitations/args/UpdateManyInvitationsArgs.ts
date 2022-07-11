import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationsUpdateManyMutationInput } from "../../../inputs/InvitationsUpdateManyMutationInput";
import { InvitationsWhereInput } from "../../../inputs/InvitationsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyInvitationsArgs {
  @TypeGraphQL.Field(_type => InvitationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: InvitationsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => InvitationsWhereInput, {
    nullable: true
  })
  where?: InvitationsWhereInput | undefined;
}
