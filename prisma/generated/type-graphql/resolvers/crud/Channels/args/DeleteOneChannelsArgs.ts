import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelsWhereUniqueInput } from "../../../inputs/ChannelsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneChannelsArgs {
  @TypeGraphQL.Field(_type => ChannelsWhereUniqueInput, {
    nullable: false
  })
  where!: ChannelsWhereUniqueInput;
}
