import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemesUpdateInput } from "../../../inputs/ThemesUpdateInput";
import { ThemesWhereUniqueInput } from "../../../inputs/ThemesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneThemesArgs {
  @TypeGraphQL.Field(_type => ThemesUpdateInput, {
    nullable: false
  })
  data!: ThemesUpdateInput;

  @TypeGraphQL.Field(_type => ThemesWhereUniqueInput, {
    nullable: false
  })
  where!: ThemesWhereUniqueInput;
}
