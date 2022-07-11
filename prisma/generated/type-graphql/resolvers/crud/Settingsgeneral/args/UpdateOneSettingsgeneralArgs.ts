import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsgeneralUpdateInput } from "../../../inputs/SettingsgeneralUpdateInput";
import { SettingsgeneralWhereUniqueInput } from "../../../inputs/SettingsgeneralWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSettingsgeneralArgs {
  @TypeGraphQL.Field(_type => SettingsgeneralUpdateInput, {
    nullable: false
  })
  data!: SettingsgeneralUpdateInput;

  @TypeGraphQL.Field(_type => SettingsgeneralWhereUniqueInput, {
    nullable: false
  })
  where!: SettingsgeneralWhereUniqueInput;
}
