import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelsOrderByWithRelationInput } from "../../../inputs/ChannelsOrderByWithRelationInput";
import { ChannelsWhereInput } from "../../../inputs/ChannelsWhereInput";
import { ChannelsWhereUniqueInput } from "../../../inputs/ChannelsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateChannelsArgs {
  @TypeGraphQL.Field(_type => ChannelsWhereInput, {
    nullable: true
  })
  where?: ChannelsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChannelsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ChannelsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ChannelsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChannelsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
