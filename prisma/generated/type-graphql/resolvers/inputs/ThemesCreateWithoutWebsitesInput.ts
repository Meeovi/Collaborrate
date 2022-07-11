import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ThemesCreateWithoutWebsitesInput", {
  isAbstract: true
})
export class ThemesCreateWithoutWebsitesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parent_theme?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  theme_path?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  action?: string | undefined;
}
