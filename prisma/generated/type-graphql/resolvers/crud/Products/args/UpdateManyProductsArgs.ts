import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductsUpdateManyMutationInput } from "../../../inputs/ProductsUpdateManyMutationInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProductsArgs {
  @TypeGraphQL.Field(_type => ProductsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProductsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  where?: ProductsWhereInput | undefined;
}
