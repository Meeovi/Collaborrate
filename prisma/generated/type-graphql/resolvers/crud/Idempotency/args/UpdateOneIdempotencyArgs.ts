import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IdempotencyUpdateInput } from "../../../inputs/IdempotencyUpdateInput";
import { IdempotencyWhereUniqueInput } from "../../../inputs/IdempotencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIdempotencyArgs {
  @TypeGraphQL.Field(_type => IdempotencyUpdateInput, {
    nullable: false
  })
  data!: IdempotencyUpdateInput;

  @TypeGraphQL.Field(_type => IdempotencyWhereUniqueInput, {
    nullable: false
  })
  where!: IdempotencyWhereUniqueInput;
}
