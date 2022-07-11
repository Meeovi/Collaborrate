import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attributeUpdateManyMutationInput } from "../../../inputs/Product_attributeUpdateManyMutationInput";
import { Product_attributeWhereInput } from "../../../inputs/Product_attributeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_attributeArgs {
  @TypeGraphQL.Field(_type => Product_attributeUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_attributeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_attributeWhereInput, {
    nullable: true
  })
  where?: Product_attributeWhereInput | undefined;
}
