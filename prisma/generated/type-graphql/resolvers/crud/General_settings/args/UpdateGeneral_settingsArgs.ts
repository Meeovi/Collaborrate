import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { General_settingsUpdateInput } from "../../../inputs/General_settingsUpdateInput";
import { General_settingsWhereUniqueInput } from "../../../inputs/General_settingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateGeneral_settingsArgs {
  @TypeGraphQL.Field(_type => General_settingsUpdateInput, {
    nullable: false
  })
  data!: General_settingsUpdateInput;

  @TypeGraphQL.Field(_type => General_settingsWhereUniqueInput, {
    nullable: false
  })
  where!: General_settingsWhereUniqueInput;
}
