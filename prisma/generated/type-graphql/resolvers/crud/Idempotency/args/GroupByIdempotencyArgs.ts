import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IdempotencyOrderByWithAggregationInput } from "../../../inputs/IdempotencyOrderByWithAggregationInput";
import { IdempotencyScalarWhereWithAggregatesInput } from "../../../inputs/IdempotencyScalarWhereWithAggregatesInput";
import { IdempotencyWhereInput } from "../../../inputs/IdempotencyWhereInput";
import { IdempotencyScalarFieldEnum } from "../../../../enums/IdempotencyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIdempotencyArgs {
  @TypeGraphQL.Field(_type => IdempotencyWhereInput, {
    nullable: true
  })
  where?: IdempotencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IdempotencyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IdempotencyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IdempotencyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"objectId" | "createdAt" | "updatedAt" | "reqId" | "expire" | "rperm" | "wperm">;

  @TypeGraphQL.Field(_type => IdempotencyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IdempotencyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
