import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsitesCreateWithoutThemesInput } from "../inputs/WebsitesCreateWithoutThemesInput";
import { WebsitesWhereUniqueInput } from "../inputs/WebsitesWhereUniqueInput";

@TypeGraphQL.InputType("WebsitesCreateOrConnectWithoutThemesInput", {
  isAbstract: true
})
export class WebsitesCreateOrConnectWithoutThemesInput {
  @TypeGraphQL.Field(_type => WebsitesWhereUniqueInput, {
    nullable: false
  })
  where!: WebsitesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WebsitesCreateWithoutThemesInput, {
    nullable: false
  })
  create!: WebsitesCreateWithoutThemesInput;
}
