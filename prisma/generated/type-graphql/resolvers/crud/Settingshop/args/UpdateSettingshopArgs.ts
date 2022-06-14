import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingshopUpdateInput } from "../../../inputs/SettingshopUpdateInput";
import { SettingshopWhereUniqueInput } from "../../../inputs/SettingshopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSettingshopArgs {
  @TypeGraphQL.Field(_type => SettingshopUpdateInput, {
    nullable: false
  })
  data!: SettingshopUpdateInput;

  @TypeGraphQL.Field(_type => SettingshopWhereUniqueInput, {
    nullable: false
  })
  where!: SettingshopWhereUniqueInput;
}
