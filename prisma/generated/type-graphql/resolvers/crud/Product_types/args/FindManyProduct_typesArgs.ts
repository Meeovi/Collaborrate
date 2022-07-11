import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_typesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_typesOrderByWithRelationAndSearchRelevanceInput";
import { Product_typesWhereInput } from "../../../inputs/Product_typesWhereInput";
import { Product_typesWhereUniqueInput } from "../../../inputs/Product_typesWhereUniqueInput";
import { Product_typesScalarFieldEnum } from "../../../../enums/Product_typesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProduct_typesArgs {
  @TypeGraphQL.Field(_type => Product_typesWhereInput, {
    nullable: true
  })
  where?: Product_typesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_typesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_typesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_typesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_typesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_typesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type_name" | "taxes" | "isShippable" | "meta_url" | "meta_description" | "filter_options" | "product_type" | "prod_id"> | undefined;
}
