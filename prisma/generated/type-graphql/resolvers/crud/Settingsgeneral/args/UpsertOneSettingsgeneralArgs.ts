import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsgeneralCreateInput } from "../../../inputs/SettingsgeneralCreateInput";
import { SettingsgeneralUpdateInput } from "../../../inputs/SettingsgeneralUpdateInput";
import { SettingsgeneralWhereUniqueInput } from "../../../inputs/SettingsgeneralWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSettingsgeneralArgs {
  @TypeGraphQL.Field(_type => SettingsgeneralWhereUniqueInput, {
    nullable: false
  })
  where!: SettingsgeneralWhereUniqueInput;

  @TypeGraphQL.Field(_type => SettingsgeneralCreateInput, {
    nullable: false
  })
  create!: SettingsgeneralCreateInput;

  @TypeGraphQL.Field(_type => SettingsgeneralUpdateInput, {
    nullable: false
  })
  update!: SettingsgeneralUpdateInput;
}
