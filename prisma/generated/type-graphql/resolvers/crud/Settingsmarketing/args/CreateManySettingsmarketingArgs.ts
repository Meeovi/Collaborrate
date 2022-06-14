import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsmarketingCreateManyInput } from "../../../inputs/SettingsmarketingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySettingsmarketingArgs {
  @TypeGraphQL.Field(_type => [SettingsmarketingCreateManyInput], {
    nullable: false
  })
  data!: SettingsmarketingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
