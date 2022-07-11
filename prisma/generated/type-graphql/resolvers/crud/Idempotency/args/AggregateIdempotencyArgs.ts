import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IdempotencyOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/IdempotencyOrderByWithRelationAndSearchRelevanceInput";
import { IdempotencyWhereInput } from "../../../inputs/IdempotencyWhereInput";
import { IdempotencyWhereUniqueInput } from "../../../inputs/IdempotencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateIdempotencyArgs {
  @TypeGraphQL.Field(_type => IdempotencyWhereInput, {
    nullable: true
  })
  where?: IdempotencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IdempotencyOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: IdempotencyOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => IdempotencyWhereUniqueInput, {
    nullable: true
  })
  cursor?: IdempotencyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
