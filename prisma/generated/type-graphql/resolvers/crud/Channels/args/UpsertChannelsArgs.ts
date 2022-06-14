import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelsCreateInput } from "../../../inputs/ChannelsCreateInput";
import { ChannelsUpdateInput } from "../../../inputs/ChannelsUpdateInput";
import { ChannelsWhereUniqueInput } from "../../../inputs/ChannelsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertChannelsArgs {
  @TypeGraphQL.Field(_type => ChannelsWhereUniqueInput, {
    nullable: false
  })
  where!: ChannelsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChannelsCreateInput, {
    nullable: false
  })
  create!: ChannelsCreateInput;

  @TypeGraphQL.Field(_type => ChannelsUpdateInput, {
    nullable: false
  })
  update!: ChannelsUpdateInput;
}
