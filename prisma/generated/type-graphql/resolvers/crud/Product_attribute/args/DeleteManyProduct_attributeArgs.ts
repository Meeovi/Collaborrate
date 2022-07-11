import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attributeWhereInput } from "../../../inputs/Product_attributeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_attributeArgs {
  @TypeGraphQL.Field(_type => Product_attributeWhereInput, {
    nullable: true
  })
  where?: Product_attributeWhereInput | undefined;
}
