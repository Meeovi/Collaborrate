import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThemesScalarWhereInput } from "../inputs/ThemesScalarWhereInput";
import { ThemesUpdateManyMutationInput } from "../inputs/ThemesUpdateManyMutationInput";

@TypeGraphQL.InputType("ThemesUpdateManyWithWhereWithoutWebsitesInput", {
  isAbstract: true
})
export class ThemesUpdateManyWithWhereWithoutWebsitesInput {
  @TypeGraphQL.Field(_type => ThemesScalarWhereInput, {
    nullable: false
  })
  where!: ThemesScalarWhereInput;

  @TypeGraphQL.Field(_type => ThemesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThemesUpdateManyMutationInput;
}
