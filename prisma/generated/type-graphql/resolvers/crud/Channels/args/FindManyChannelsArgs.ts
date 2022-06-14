import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelsOrderByWithRelationInput } from "../../../inputs/ChannelsOrderByWithRelationInput";
import { ChannelsWhereInput } from "../../../inputs/ChannelsWhereInput";
import { ChannelsWhereUniqueInput } from "../../../inputs/ChannelsWhereUniqueInput";
import { ChannelsScalarFieldEnum } from "../../../../enums/ChannelsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyChannelsArgs {
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

  @TypeGraphQL.Field(_type => [ChannelsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "code" | "name" | "currency" | "default_lang" | "include_tax" | "default_zone" | "default_shipping" | "client_id" | "client_secret"> | undefined;
}
