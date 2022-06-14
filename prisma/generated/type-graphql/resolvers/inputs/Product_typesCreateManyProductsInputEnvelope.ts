import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_typesCreateManyProductsInput } from "../inputs/Product_typesCreateManyProductsInput";

@TypeGraphQL.InputType("Product_typesCreateManyProductsInputEnvelope", {
  isAbstract: true
})
export class Product_typesCreateManyProductsInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_typesCreateManyProductsInput], {
    nullable: false
  })
  data!: Product_typesCreateManyProductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
