import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingshopCreateManyInput } from "../../../inputs/SettingshopCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySettingshopArgs {
  @TypeGraphQL.Field(_type => [SettingshopCreateManyInput], {
    nullable: false
  })
  data!: SettingshopCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
