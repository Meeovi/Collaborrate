import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MeetingCreateManyInput } from "../../../inputs/MeetingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMeetingArgs {
  @TypeGraphQL.Field(_type => [MeetingCreateManyInput], {
    nullable: false
  })
  data!: MeetingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
