import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThemesCreateManyWebsitesInputEnvelope } from "../inputs/ThemesCreateManyWebsitesInputEnvelope";
import { ThemesCreateOrConnectWithoutWebsitesInput } from "../inputs/ThemesCreateOrConnectWithoutWebsitesInput";
import { ThemesCreateWithoutWebsitesInput } from "../inputs/ThemesCreateWithoutWebsitesInput";
import { ThemesWhereUniqueInput } from "../inputs/ThemesWhereUniqueInput";

@TypeGraphQL.InputType("ThemesCreateNestedManyWithoutWebsitesInput", {
  isAbstract: true
})
export class ThemesCreateNestedManyWithoutWebsitesInput {
  @TypeGraphQL.Field(_type => [ThemesCreateWithoutWebsitesInput], {
    nullable: true
  })
  create?: ThemesCreateWithoutWebsitesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesCreateOrConnectWithoutWebsitesInput], {
    nullable: true
  })
  connectOrCreate?: ThemesCreateOrConnectWithoutWebsitesInput[] | undefined;

  @TypeGraphQL.Field(_type => ThemesCreateManyWebsitesInputEnvelope, {
    nullable: true
  })
  createMany?: ThemesCreateManyWebsitesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ThemesWhereUniqueInput], {
    nullable: true
  })
  connect?: ThemesWhereUniqueInput[] | undefined;
}
