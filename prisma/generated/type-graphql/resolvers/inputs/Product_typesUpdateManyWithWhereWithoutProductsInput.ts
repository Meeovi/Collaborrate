import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_typesScalarWhereInput } from "../inputs/Product_typesScalarWhereInput";
import { Product_typesUpdateManyMutationInput } from "../inputs/Product_typesUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_typesUpdateManyWithWhereWithoutProductsInput", {
  isAbstract: true
})
export class Product_typesUpdateManyWithWhereWithoutProductsInput {
  @TypeGraphQL.Field(_type => Product_typesScalarWhereInput, {
    nullable: false
  })
  where!: Product_typesScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_typesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_typesUpdateManyMutationInput;
}
