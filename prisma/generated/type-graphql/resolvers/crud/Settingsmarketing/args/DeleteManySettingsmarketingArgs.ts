import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsmarketingWhereInput } from "../../../inputs/SettingsmarketingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySettingsmarketingArgs {
  @TypeGraphQL.Field(_type => SettingsmarketingWhereInput, {
    nullable: true
  })
  where?: SettingsmarketingWhereInput | undefined;
}
