import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { General_settingsCreateInput } from "../../../inputs/General_settingsCreateInput";
import { General_settingsUpdateInput } from "../../../inputs/General_settingsUpdateInput";
import { General_settingsWhereUniqueInput } from "../../../inputs/General_settingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGeneral_settingsArgs {
  @TypeGraphQL.Field(_type => General_settingsWhereUniqueInput, {
    nullable: false
  })
  where!: General_settingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => General_settingsCreateInput, {
    nullable: false
  })
  create!: General_settingsCreateInput;

  @TypeGraphQL.Field(_type => General_settingsUpdateInput, {
    nullable: false
  })
  update!: General_settingsUpdateInput;
}
