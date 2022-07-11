import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsgeneralCreateManyInput } from "../../../inputs/SettingsgeneralCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySettingsgeneralArgs {
  @TypeGraphQL.Field(_type => [SettingsgeneralCreateManyInput], {
    nullable: false
  })
  data!: SettingsgeneralCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
