import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MeetingCreateInput } from "../../../inputs/MeetingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMeetingArgs {
  @TypeGraphQL.Field(_type => MeetingCreateInput, {
    nullable: false
  })
  data!: MeetingCreateInput;
}
