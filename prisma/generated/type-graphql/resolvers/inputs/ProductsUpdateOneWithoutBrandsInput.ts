import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutBrandsInput } from "../inputs/ProductsCreateOrConnectWithoutBrandsInput";
import { ProductsCreateWithoutBrandsInput } from "../inputs/ProductsCreateWithoutBrandsInput";
import { ProductsUpdateWithoutBrandsInput } from "../inputs/ProductsUpdateWithoutBrandsInput";
import { ProductsUpsertWithoutBrandsInput } from "../inputs/ProductsUpsertWithoutBrandsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneWithoutBrandsInput", {
  isAbstract: true
})
export class ProductsUpdateOneWithoutBrandsInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutBrandsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutBrandsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutBrandsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutBrandsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutBrandsInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutBrandsInput | undefined;

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

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutBrandsInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutBrandsInput | undefined;
}
