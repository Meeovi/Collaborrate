import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MeetingOrderByWithRelationInput } from "../../../inputs/MeetingOrderByWithRelationInput";
import { MeetingWhereInput } from "../../../inputs/MeetingWhereInput";
import { MeetingWhereUniqueInput } from "../../../inputs/MeetingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMeetingArgs {
  @TypeGraphQL.Field(_type => MeetingWhereInput, {
    nullable: true
  })
  where?: MeetingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MeetingOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MeetingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MeetingWhereUniqueInput, {
    nullable: true
  })
  cursor?: MeetingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
