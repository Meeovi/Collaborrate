import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_typesWhereUniqueInput } from "../../../inputs/Product_typesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_typesArgs {
  @TypeGraphQL.Field(_type => Product_typesWhereUniqueInput, {
    nullable: false
  })
  where!: Product_typesWhereUniqueInput;
}
