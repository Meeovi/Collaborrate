import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelsUpdateInput } from "../../../inputs/ChannelsUpdateInput";
import { ChannelsWhereUniqueInput } from "../../../inputs/ChannelsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateChannelsArgs {
  @TypeGraphQL.Field(_type => ChannelsUpdateInput, {
    nullable: false
  })
  data!: ChannelsUpdateInput;

  @TypeGraphQL.Field(_type => ChannelsWhereUniqueInput, {
    nullable: false
  })
  where!: ChannelsWhereUniqueInput;
}
