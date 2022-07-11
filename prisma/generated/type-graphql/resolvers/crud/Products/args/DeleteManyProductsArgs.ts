import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProductsArgs {
  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  where?: ProductsWhereInput | undefined;
}
