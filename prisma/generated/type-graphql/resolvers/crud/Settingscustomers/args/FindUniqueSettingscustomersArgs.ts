import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingscustomersWhereUniqueInput } from "../../../inputs/SettingscustomersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSettingscustomersArgs {
  @TypeGraphQL.Field(_type => SettingscustomersWhereUniqueInput, {
    nullable: false
  })
  where!: SettingscustomersWhereUniqueInput;
}
