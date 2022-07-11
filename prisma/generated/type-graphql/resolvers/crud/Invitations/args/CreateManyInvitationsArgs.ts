import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationsCreateManyInput } from "../../../inputs/InvitationsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyInvitationsArgs {
  @TypeGraphQL.Field(_type => [InvitationsCreateManyInput], {
    nullable: false
  })
  data!: InvitationsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
