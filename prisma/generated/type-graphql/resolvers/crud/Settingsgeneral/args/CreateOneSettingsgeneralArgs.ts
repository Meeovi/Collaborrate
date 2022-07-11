import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsgeneralCreateInput } from "../../../inputs/SettingsgeneralCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSettingsgeneralArgs {
  @TypeGraphQL.Field(_type => SettingsgeneralCreateInput, {
    nullable: false
  })
  data!: SettingsgeneralCreateInput;
}
