import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attribute_setWhereInput } from "../../../inputs/Product_attribute_setWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_attribute_setArgs {
  @TypeGraphQL.Field(_type => Product_attribute_setWhereInput, {
    nullable: true
  })
  where?: Product_attribute_setWhereInput | undefined;
}
