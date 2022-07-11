import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelsOrderByWithAggregationInput } from "../../../inputs/ChannelsOrderByWithAggregationInput";
import { ChannelsScalarWhereWithAggregatesInput } from "../../../inputs/ChannelsScalarWhereWithAggregatesInput";
import { ChannelsWhereInput } from "../../../inputs/ChannelsWhereInput";
import { ChannelsScalarFieldEnum } from "../../../../enums/ChannelsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByChannelsArgs {
  @TypeGraphQL.Field(_type => ChannelsWhereInput, {
    nullable: true
  })
  where?: ChannelsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChannelsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ChannelsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "code" | "name" | "currency" | "default_lang" | "include_tax" | "default_zone" | "default_shipping" | "client_id" | "client_secret">;

  @TypeGraphQL.Field(_type => ChannelsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ChannelsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
