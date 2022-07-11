import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CouponsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CouponsOrderByWithRelationAndSearchRelevanceInput";
import { CouponsWhereInput } from "../../../inputs/CouponsWhereInput";
import { CouponsWhereUniqueInput } from "../../../inputs/CouponsWhereUniqueInput";
import { CouponsScalarFieldEnum } from "../../../../enums/CouponsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCouponsArgs {
  @TypeGraphQL.Field(_type => CouponsWhereInput, {
    nullable: true
  })
  where?: CouponsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CouponsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CouponsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CouponsWhereUniqueInput, {
    nullable: true
  })
  cursor?: CouponsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CouponsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "expiration" | "categories" | "articles" | "products" | "customers" | "users" | "prod_id"> | undefined;
}
