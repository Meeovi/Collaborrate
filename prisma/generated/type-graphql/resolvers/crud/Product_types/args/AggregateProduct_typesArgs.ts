import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_typesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_typesOrderByWithRelationAndSearchRelevanceInput";
import { Product_typesWhereInput } from "../../../inputs/Product_typesWhereInput";
import { Product_typesWhereUniqueInput } from "../../../inputs/Product_typesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProduct_typesArgs {
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
}
