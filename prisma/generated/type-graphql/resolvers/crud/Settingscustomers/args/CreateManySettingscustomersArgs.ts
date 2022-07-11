import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingscustomersCreateManyInput } from "../../../inputs/SettingscustomersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySettingscustomersArgs {
  @TypeGraphQL.Field(_type => [SettingscustomersCreateManyInput], {
    nullable: false
  })
  data!: SettingscustomersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
