import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MeetingWhereInput } from "../../../inputs/MeetingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMeetingArgs {
  @TypeGraphQL.Field(_type => MeetingWhereInput, {
    nullable: true
  })
  where?: MeetingWhereInput | undefined;
}
