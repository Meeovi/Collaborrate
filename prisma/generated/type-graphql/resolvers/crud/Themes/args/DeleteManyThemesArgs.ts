import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemesWhereInput } from "../../../inputs/ThemesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyThemesArgs {
  @TypeGraphQL.Field(_type => ThemesWhereInput, {
    nullable: true
  })
  where?: ThemesWhereInput | undefined;
}
