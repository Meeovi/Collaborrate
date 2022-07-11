import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsitesWhereInput } from "../inputs/WebsitesWhereInput";

@TypeGraphQL.InputType("WebsitesRelationFilter", {
  isAbstract: true
})
export class WebsitesRelationFilter {
  @TypeGraphQL.Field(_type => WebsitesWhereInput, {
    nullable: true
  })
  is?: WebsitesWhereInput | undefined;

  @TypeGraphQL.Field(_type => WebsitesWhereInput, {
    nullable: true
  })
  isNot?: WebsitesWhereInput | undefined;
}
