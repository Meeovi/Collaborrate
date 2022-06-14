import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelsWhereInput } from "../../../inputs/ChannelsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyChannelsArgs {
  @TypeGraphQL.Field(_type => ChannelsWhereInput, {
    nullable: true
  })
  where?: ChannelsWhereInput | undefined;
}
