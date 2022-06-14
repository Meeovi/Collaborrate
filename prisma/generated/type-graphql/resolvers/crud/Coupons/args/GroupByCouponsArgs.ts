import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CouponsOrderByWithAggregationInput } from "../../../inputs/CouponsOrderByWithAggregationInput";
import { CouponsScalarWhereWithAggregatesInput } from "../../../inputs/CouponsScalarWhereWithAggregatesInput";
import { CouponsWhereInput } from "../../../inputs/CouponsWhereInput";
import { CouponsScalarFieldEnum } from "../../../../enums/CouponsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCouponsArgs {
  @TypeGraphQL.Field(_type => CouponsWhereInput, {
    nullable: true
  })
  where?: CouponsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CouponsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CouponsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CouponsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "expiration" | "categories" | "articles" | "products" | "customers" | "users" | "prod_id">;

  @TypeGraphQL.Field(_type => CouponsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CouponsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
