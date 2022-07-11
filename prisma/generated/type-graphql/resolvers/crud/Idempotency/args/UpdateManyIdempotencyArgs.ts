import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IdempotencyUpdateManyMutationInput } from "../../../inputs/IdempotencyUpdateManyMutationInput";
import { IdempotencyWhereInput } from "../../../inputs/IdempotencyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIdempotencyArgs {
  @TypeGraphQL.Field(_type => IdempotencyUpdateManyMutationInput, {
    nullable: false
  })
  data!: IdempotencyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IdempotencyWhereInput, {
    nullable: true
  })
  where?: IdempotencyWhereInput | undefined;
}
