import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ProductsOrderByWithRelationAndSearchRelevanceInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
import { ProductsWhereUniqueInput } from "../../../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProductsArgs {
  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  where?: ProductsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ProductsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
