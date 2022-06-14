import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_typesCreateInput } from "../../../inputs/Product_typesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProduct_typesArgs {
  @TypeGraphQL.Field(_type => Product_typesCreateInput, {
    nullable: false
  })
  data!: Product_typesCreateInput;
}
