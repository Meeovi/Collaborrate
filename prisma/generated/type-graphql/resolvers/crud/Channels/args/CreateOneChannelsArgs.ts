import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelsCreateInput } from "../../../inputs/ChannelsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneChannelsArgs {
  @TypeGraphQL.Field(_type => ChannelsCreateInput, {
    nullable: false
  })
  data!: ChannelsCreateInput;
}
