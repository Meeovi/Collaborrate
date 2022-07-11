import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingscustomersWhereInput } from "../../../inputs/SettingscustomersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySettingscustomersArgs {
  @TypeGraphQL.Field(_type => SettingscustomersWhereInput, {
    nullable: true
  })
  where?: SettingscustomersWhereInput | undefined;
}
