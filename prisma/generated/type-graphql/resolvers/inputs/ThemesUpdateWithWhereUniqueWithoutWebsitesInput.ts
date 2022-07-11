import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThemesUpdateWithoutWebsitesInput } from "../inputs/ThemesUpdateWithoutWebsitesInput";
import { ThemesWhereUniqueInput } from "../inputs/ThemesWhereUniqueInput";

@TypeGraphQL.InputType("ThemesUpdateWithWhereUniqueWithoutWebsitesInput", {
  isAbstract: true
})
export class ThemesUpdateWithWhereUniqueWithoutWebsitesInput {
  @TypeGraphQL.Field(_type => ThemesWhereUniqueInput, {
    nullable: false
  })
  where!: ThemesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThemesUpdateWithoutWebsitesInput, {
    nullable: false
  })
  data!: ThemesUpdateWithoutWebsitesInput;
}
