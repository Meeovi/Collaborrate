import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutRatingInput } from "../inputs/ProductsCreateOrConnectWithoutRatingInput";
import { ProductsCreateWithoutRatingInput } from "../inputs/ProductsCreateWithoutRatingInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutRatingInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutRatingInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutRatingInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutRatingInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutRatingInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutRatingInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
