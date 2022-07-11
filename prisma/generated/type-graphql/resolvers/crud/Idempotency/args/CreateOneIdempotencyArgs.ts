import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IdempotencyCreateInput } from "../../../inputs/IdempotencyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneIdempotencyArgs {
  @TypeGraphQL.Field(_type => IdempotencyCreateInput, {
    nullable: false
  })
  data!: IdempotencyCreateInput;
}
