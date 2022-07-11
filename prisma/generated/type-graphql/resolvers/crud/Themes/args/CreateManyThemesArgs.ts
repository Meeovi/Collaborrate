import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemesCreateManyInput } from "../../../inputs/ThemesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyThemesArgs {
  @TypeGraphQL.Field(_type => [ThemesCreateManyInput], {
    nullable: false
  })
  data!: ThemesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
