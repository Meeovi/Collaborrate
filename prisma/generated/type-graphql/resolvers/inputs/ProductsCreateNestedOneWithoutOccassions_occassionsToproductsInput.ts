import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutOccassions_occassionsToproductsInput } from "../inputs/ProductsCreateOrConnectWithoutOccassions_occassionsToproductsInput";
import { ProductsCreateWithoutOccassions_occassionsToproductsInput } from "../inputs/ProductsCreateWithoutOccassions_occassionsToproductsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutOccassions_occassionsToproductsInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutOccassions_occassionsToproductsInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutOccassions_occassionsToproductsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutOccassions_occassionsToproductsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutOccassions_occassionsToproductsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutOccassions_occassionsToproductsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
