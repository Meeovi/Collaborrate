import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutMediamanagerInput } from "../inputs/ProductsCreateOrConnectWithoutMediamanagerInput";
import { ProductsCreateWithoutMediamanagerInput } from "../inputs/ProductsCreateWithoutMediamanagerInput";
import { ProductsUpdateWithoutMediamanagerInput } from "../inputs/ProductsUpdateWithoutMediamanagerInput";
import { ProductsUpsertWithoutMediamanagerInput } from "../inputs/ProductsUpsertWithoutMediamanagerInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneWithoutMediamanagerNestedInput", {
  isAbstract: true
})
export class ProductsUpdateOneWithoutMediamanagerNestedInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutMediamanagerInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutMediamanagerInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutMediamanagerInput | undefined;
}
