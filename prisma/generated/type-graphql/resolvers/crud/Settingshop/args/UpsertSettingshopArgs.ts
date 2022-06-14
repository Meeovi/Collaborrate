import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingshopCreateInput } from "../../../inputs/SettingshopCreateInput";
import { SettingshopUpdateInput } from "../../../inputs/SettingshopUpdateInput";
import { SettingshopWhereUniqueInput } from "../../../inputs/SettingshopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSettingshopArgs {
  @TypeGraphQL.Field(_type => SettingshopWhereUniqueInput, {
    nullable: false
  })
  where!: SettingshopWhereUniqueInput;

  @TypeGraphQL.Field(_type => SettingshopCreateInput, {
    nullable: false
  })
  create!: SettingshopCreateInput;

  @TypeGraphQL.Field(_type => SettingshopUpdateInput, {
    nullable: false
  })
  update!: SettingshopUpdateInput;
}
