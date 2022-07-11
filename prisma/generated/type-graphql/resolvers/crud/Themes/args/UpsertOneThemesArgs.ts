import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemesCreateInput } from "../../../inputs/ThemesCreateInput";
import { ThemesUpdateInput } from "../../../inputs/ThemesUpdateInput";
import { ThemesWhereUniqueInput } from "../../../inputs/ThemesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneThemesArgs {
  @TypeGraphQL.Field(_type => ThemesWhereUniqueInput, {
    nullable: false
  })
  where!: ThemesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThemesCreateInput, {
    nullable: false
  })
  create!: ThemesCreateInput;

  @TypeGraphQL.Field(_type => ThemesUpdateInput, {
    nullable: false
  })
  update!: ThemesUpdateInput;
}
