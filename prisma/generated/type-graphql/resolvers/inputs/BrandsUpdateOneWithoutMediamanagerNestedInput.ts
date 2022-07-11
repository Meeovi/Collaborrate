import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateOrConnectWithoutMediamanagerInput } from "../inputs/BrandsCreateOrConnectWithoutMediamanagerInput";
import { BrandsCreateWithoutMediamanagerInput } from "../inputs/BrandsCreateWithoutMediamanagerInput";
import { BrandsUpdateWithoutMediamanagerInput } from "../inputs/BrandsUpdateWithoutMediamanagerInput";
import { BrandsUpsertWithoutMediamanagerInput } from "../inputs/BrandsUpsertWithoutMediamanagerInput";
import { BrandsWhereUniqueInput } from "../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.InputType("BrandsUpdateOneWithoutMediamanagerNestedInput", {
  isAbstract: true
})
export class BrandsUpdateOneWithoutMediamanagerNestedInput {
  @TypeGraphQL.Field(_type => BrandsCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: BrandsCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => BrandsCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: BrandsCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => BrandsUpsertWithoutMediamanagerInput, {
    nullable: true
  })
  upsert?: BrandsUpsertWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: true
  })
  connect?: BrandsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BrandsUpdateWithoutMediamanagerInput, {
    nullable: true
  })
  update?: BrandsUpdateWithoutMediamanagerInput | undefined;
}
