import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsitesCreateWithoutThemesInput } from "../inputs/WebsitesCreateWithoutThemesInput";
import { WebsitesUpdateWithoutThemesInput } from "../inputs/WebsitesUpdateWithoutThemesInput";

@TypeGraphQL.InputType("WebsitesUpsertWithoutThemesInput", {
  isAbstract: true
})
export class WebsitesUpsertWithoutThemesInput {
  @TypeGraphQL.Field(_type => WebsitesUpdateWithoutThemesInput, {
    nullable: false
  })
  update!: WebsitesUpdateWithoutThemesInput;

  @TypeGraphQL.Field(_type => WebsitesCreateWithoutThemesInput, {
    nullable: false
  })
  create!: WebsitesCreateWithoutThemesInput;
}
