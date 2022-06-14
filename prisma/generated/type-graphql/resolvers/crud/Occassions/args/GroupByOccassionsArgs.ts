import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccassionsOrderByWithAggregationInput } from "../../../inputs/OccassionsOrderByWithAggregationInput";
import { OccassionsScalarWhereWithAggregatesInput } from "../../../inputs/OccassionsScalarWhereWithAggregatesInput";
import { OccassionsWhereInput } from "../../../inputs/OccassionsWhereInput";
import { OccassionsScalarFieldEnum } from "../../../../enums/OccassionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOccassionsArgs {
  @TypeGraphQL.Field(_type => OccassionsWhereInput, {
    nullable: true
  })
  where?: OccassionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OccassionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OccassionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccassionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "code" | "name" | "category" | "tags" | "description" | "products" | "wishlists">;

  @TypeGraphQL.Field(_type => OccassionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OccassionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
