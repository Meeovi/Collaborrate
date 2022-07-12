import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MeetingWhereUniqueInput } from "../../../inputs/MeetingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMeetingArgs {
  @TypeGraphQL.Field(_type => MeetingWhereUniqueInput, {
    nullable: false
  })
  where!: MeetingWhereUniqueInput;
}