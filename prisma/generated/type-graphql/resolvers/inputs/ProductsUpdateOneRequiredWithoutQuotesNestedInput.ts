import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutQuotesInput } from "../inputs/ProductsCreateOrConnectWithoutQuotesInput";
import { ProductsCreateWithoutQuotesInput } from "../inputs/ProductsCreateWithoutQuotesInput";
import { ProductsUpdateWithoutQuotesInput } from "../inputs/ProductsUpdateWithoutQuotesInput";
import { ProductsUpsertWithoutQuotesInput } from "../inputs/ProductsUpsertWithoutQuotesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutQuotesNestedInput", {
  isAbstract: true
})
export class ProductsUpdateOneRequiredWithoutQuotesNestedInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutQuotesInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutQuotesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutQuotesInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutQuotesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutQuotesInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutQuotesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutQuotesInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutQuotesInput | undefined;
}
