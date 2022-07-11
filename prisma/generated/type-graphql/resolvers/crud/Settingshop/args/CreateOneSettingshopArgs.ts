import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingshopCreateInput } from "../../../inputs/SettingshopCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSettingshopArgs {
  @TypeGraphQL.Field(_type => SettingshopCreateInput, {
    nullable: false
  })
  data!: SettingshopCreateInput;
}
