import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThemesCreateWithoutWebsitesInput } from "../inputs/ThemesCreateWithoutWebsitesInput";
import { ThemesWhereUniqueInput } from "../inputs/ThemesWhereUniqueInput";

@TypeGraphQL.InputType("ThemesCreateOrConnectWithoutWebsitesInput", {
  isAbstract: true
})
export class ThemesCreateOrConnectWithoutWebsitesInput {
  @TypeGraphQL.Field(_type => ThemesWhereUniqueInput, {
    nullable: false
  })
  where!: ThemesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThemesCreateWithoutWebsitesInput, {
    nullable: false
  })
  create!: ThemesCreateWithoutWebsitesInput;
}
