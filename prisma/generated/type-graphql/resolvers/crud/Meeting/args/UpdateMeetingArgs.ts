import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MeetingUpdateInput } from "../../../inputs/MeetingUpdateInput";
import { MeetingWhereUniqueInput } from "../../../inputs/MeetingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMeetingArgs {
  @TypeGraphQL.Field(_type => MeetingUpdateInput, {
    nullable: false
  })
  data!: MeetingUpdateInput;

  @TypeGraphQL.Field(_type => MeetingWhereUniqueInput, {
    nullable: false
  })
  where!: MeetingWhereUniqueInput;
}
