import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelsCreateManyInput } from "../../../inputs/ChannelsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyChannelsArgs {
  @TypeGraphQL.Field(_type => [ChannelsCreateManyInput], {
    nullable: false
  })
  data!: ChannelsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
