import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingshopWhereInput } from "../../../inputs/SettingshopWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySettingshopArgs {
  @TypeGraphQL.Field(_type => SettingshopWhereInput, {
    nullable: true
  })
  where?: SettingshopWhereInput | undefined;
}
