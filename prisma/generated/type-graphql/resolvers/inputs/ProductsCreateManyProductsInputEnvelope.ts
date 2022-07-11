import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateManyProductsInput } from "../inputs/ProductsCreateManyProductsInput";

@TypeGraphQL.InputType("ProductsCreateManyProductsInputEnvelope", {
  isAbstract: true
})
export class ProductsCreateManyProductsInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductsCreateManyProductsInput], {
    nullable: false
  })
  data!: ProductsCreateManyProductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
