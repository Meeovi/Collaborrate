import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IdempotencyCreateInput } from "../../../inputs/IdempotencyCreateInput";
import { IdempotencyUpdateInput } from "../../../inputs/IdempotencyUpdateInput";
import { IdempotencyWhereUniqueInput } from "../../../inputs/IdempotencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIdempotencyArgs {
  @TypeGraphQL.Field(_type => IdempotencyWhereUniqueInput, {
    nullable: false
  })
  where!: IdempotencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => IdempotencyCreateInput, {
    nullable: false
  })
  create!: IdempotencyCreateInput;

  @TypeGraphQL.Field(_type => IdempotencyUpdateInput, {
    nullable: false
  })
  update!: IdempotencyUpdateInput;
}
