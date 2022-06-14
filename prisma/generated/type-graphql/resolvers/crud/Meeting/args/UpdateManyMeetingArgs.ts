import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MeetingUpdateManyMutationInput } from "../../../inputs/MeetingUpdateManyMutationInput";
import { MeetingWhereInput } from "../../../inputs/MeetingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMeetingArgs {
  @TypeGraphQL.Field(_type => MeetingUpdateManyMutationInput, {
    nullable: false
  })
  data!: MeetingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MeetingWhereInput, {
    nullable: true
  })
  where?: MeetingWhereInput | undefined;
}
