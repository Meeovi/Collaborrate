import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsmarketingWhereUniqueInput } from "../../../inputs/SettingsmarketingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSettingsmarketingArgs {
  @TypeGraphQL.Field(_type => SettingsmarketingWhereUniqueInput, {
    nullable: false
  })
  where!: SettingsmarketingWhereUniqueInput;
}
