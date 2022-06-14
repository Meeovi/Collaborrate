import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { General_settingsCreateManyInput } from "../../../inputs/General_settingsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGeneral_settingsArgs {
  @TypeGraphQL.Field(_type => [General_settingsCreateManyInput], {
    nullable: false
  })
  data!: General_settingsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
