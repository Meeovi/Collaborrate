import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemesCreateInput } from "../../../inputs/ThemesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneThemesArgs {
  @TypeGraphQL.Field(_type => ThemesCreateInput, {
    nullable: false
  })
  data!: ThemesCreateInput;
}
