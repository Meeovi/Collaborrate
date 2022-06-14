import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingshopOrderByWithRelationInput } from "../../../inputs/SettingshopOrderByWithRelationInput";
import { SettingshopWhereInput } from "../../../inputs/SettingshopWhereInput";
import { SettingshopWhereUniqueInput } from "../../../inputs/SettingshopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSettingshopArgs {
  @TypeGraphQL.Field(_type => SettingshopWhereInput, {
    nullable: true
  })
  where?: SettingshopWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingshopOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SettingshopOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SettingshopWhereUniqueInput, {
    nullable: true
  })
  cursor?: SettingshopWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
