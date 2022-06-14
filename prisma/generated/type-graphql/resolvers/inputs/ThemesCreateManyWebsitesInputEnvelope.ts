import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThemesCreateManyWebsitesInput } from "../inputs/ThemesCreateManyWebsitesInput";

@TypeGraphQL.InputType("ThemesCreateManyWebsitesInputEnvelope", {
  isAbstract: true
})
export class ThemesCreateManyWebsitesInputEnvelope {
  @TypeGraphQL.Field(_type => [ThemesCreateManyWebsitesInput], {
    nullable: false
  })
  data!: ThemesCreateManyWebsitesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
