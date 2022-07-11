import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThemesCreateWithoutWebsitesInput } from "../inputs/ThemesCreateWithoutWebsitesInput";
import { ThemesUpdateWithoutWebsitesInput } from "../inputs/ThemesUpdateWithoutWebsitesInput";
import { ThemesWhereUniqueInput } from "../inputs/ThemesWhereUniqueInput";

@TypeGraphQL.InputType("ThemesUpsertWithWhereUniqueWithoutWebsitesInput", {
  isAbstract: true
})
export class ThemesUpsertWithWhereUniqueWithoutWebsitesInput {
  @TypeGraphQL.Field(_type => ThemesWhereUniqueInput, {
    nullable: false
  })
  where!: ThemesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThemesUpdateWithoutWebsitesInput, {
    nullable: false
  })
  update!: ThemesUpdateWithoutWebsitesInput;

  @TypeGraphQL.Field(_type => ThemesCreateWithoutWebsitesInput, {
    nullable: false
  })
  create!: ThemesCreateWithoutWebsitesInput;
}
