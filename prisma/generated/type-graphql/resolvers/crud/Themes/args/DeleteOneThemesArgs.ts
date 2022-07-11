import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemesWhereUniqueInput } from "../../../inputs/ThemesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneThemesArgs {
  @TypeGraphQL.Field(_type => ThemesWhereUniqueInput, {
    nullable: false
  })
  where!: ThemesWhereUniqueInput;
}
