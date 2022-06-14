import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingssalesCreateManyInput } from "../../../inputs/SettingssalesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySettingssalesArgs {
  @TypeGraphQL.Field(_type => [SettingssalesCreateManyInput], {
    nullable: false
  })
  data!: SettingssalesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
