import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelsUpdateManyMutationInput } from "../../../inputs/ChannelsUpdateManyMutationInput";
import { ChannelsWhereInput } from "../../../inputs/ChannelsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyChannelsArgs {
  @TypeGraphQL.Field(_type => ChannelsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChannelsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ChannelsWhereInput, {
    nullable: true
  })
  where?: ChannelsWhereInput | undefined;
}
