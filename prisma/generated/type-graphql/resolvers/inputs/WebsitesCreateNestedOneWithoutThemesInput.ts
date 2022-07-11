import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsitesCreateOrConnectWithoutThemesInput } from "../inputs/WebsitesCreateOrConnectWithoutThemesInput";
import { WebsitesCreateWithoutThemesInput } from "../inputs/WebsitesCreateWithoutThemesInput";
import { WebsitesWhereUniqueInput } from "../inputs/WebsitesWhereUniqueInput";

@TypeGraphQL.InputType("WebsitesCreateNestedOneWithoutThemesInput", {
  isAbstract: true
})
export class WebsitesCreateNestedOneWithoutThemesInput {
  @TypeGraphQL.Field(_type => WebsitesCreateWithoutThemesInput, {
    nullable: true
  })
  create?: WebsitesCreateWithoutThemesInput | undefined;

  @TypeGraphQL.Field(_type => WebsitesCreateOrConnectWithoutThemesInput, {
    nullable: true
  })
  connectOrCreate?: WebsitesCreateOrConnectWithoutThemesInput | undefined;

  @TypeGraphQL.Field(_type => WebsitesWhereUniqueInput, {
    nullable: true
  })
  connect?: WebsitesWhereUniqueInput | undefined;
}
