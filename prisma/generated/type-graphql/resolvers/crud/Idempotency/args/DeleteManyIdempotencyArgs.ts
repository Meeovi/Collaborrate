import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IdempotencyWhereInput } from "../../../inputs/IdempotencyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIdempotencyArgs {
  @TypeGraphQL.Field(_type => IdempotencyWhereInput, {
    nullable: true
  })
  where?: IdempotencyWhereInput | undefined;
}
