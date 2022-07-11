import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutOccassions_occassionsToproductsInput } from "../inputs/ProductsCreateOrConnectWithoutOccassions_occassionsToproductsInput";
import { ProductsCreateWithoutOccassions_occassionsToproductsInput } from "../inputs/ProductsCreateWithoutOccassions_occassionsToproductsInput";
import { ProductsUpdateWithoutOccassions_occassionsToproductsInput } from "../inputs/ProductsUpdateWithoutOccassions_occassionsToproductsInput";
import { ProductsUpsertWithoutOccassions_occassionsToproductsInput } from "../inputs/ProductsUpsertWithoutOccassions_occassionsToproductsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneWithoutOccassions_occassionsToproductsNestedInput", {
  isAbstract: true
})
export class ProductsUpdateOneWithoutOccassions_occassionsToproductsNestedInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutOccassions_occassionsToproductsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutOccassions_occassionsToproductsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutOccassions_occassionsToproductsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutOccassions_occassionsToproductsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutOccassions_occassionsToproductsInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutOccassions_occassionsToproductsInput | undefined;

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

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutOccassions_occassionsToproductsInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutOccassions_occassionsToproductsInput | undefined;
}
