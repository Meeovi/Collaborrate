import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attributeOrderByWithRelationInput } from "../../../inputs/Product_attributeOrderByWithRelationInput";
import { Product_attributeWhereInput } from "../../../inputs/Product_attributeWhereInput";
import { Product_attributeWhereUniqueInput } from "../../../inputs/Product_attributeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProduct_attributeArgs {
  @TypeGraphQL.Field(_type => Product_attributeWhereInput, {
    nullable: true
  })
  where?: Product_attributeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Product_attributeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_attributeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
