import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsgeneralWhereInput } from "../../../inputs/SettingsgeneralWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySettingsgeneralArgs {
  @TypeGraphQL.Field(_type => SettingsgeneralWhereInput, {
    nullable: true
  })
  where?: SettingsgeneralWhereInput | undefined;
}
