import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThemesCreateNestedManyWithoutWebsitesInput } from "../inputs/ThemesCreateNestedManyWithoutWebsitesInput";

@TypeGraphQL.InputType("WebsitesCreateInput", {
  isAbstract: true
})
export class WebsitesCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shop?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store?: string | undefined;

  @TypeGraphQL.Field(_type => ThemesCreateNestedManyWithoutWebsitesInput, {
    nullable: true
  })
  themes?: ThemesCreateNestedManyWithoutWebsitesInput | undefined;
}
