import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThemesWhereInput } from "../inputs/ThemesWhereInput";

@TypeGraphQL.InputType("ThemesListRelationFilter", {
  isAbstract: true
})
export class ThemesListRelationFilter {
  @TypeGraphQL.Field(_type => ThemesWhereInput, {
    nullable: true
  })
  every?: ThemesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ThemesWhereInput, {
    nullable: true
  })
  some?: ThemesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ThemesWhereInput, {
    nullable: true
  })
  none?: ThemesWhereInput | undefined;
}
