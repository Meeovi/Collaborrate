import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MeetingCreateInput } from "../../../inputs/MeetingCreateInput";
import { MeetingUpdateInput } from "../../../inputs/MeetingUpdateInput";
import { MeetingWhereUniqueInput } from "../../../inputs/MeetingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMeetingArgs {
  @TypeGraphQL.Field(_type => MeetingWhereUniqueInput, {
    nullable: false
  })
  where!: MeetingWhereUniqueInput;

  @TypeGraphQL.Field(_type => MeetingCreateInput, {
    nullable: false
  })
  create!: MeetingCreateInput;

  @TypeGraphQL.Field(_type => MeetingUpdateInput, {
    nullable: false
  })
  update!: MeetingUpdateInput;
}
