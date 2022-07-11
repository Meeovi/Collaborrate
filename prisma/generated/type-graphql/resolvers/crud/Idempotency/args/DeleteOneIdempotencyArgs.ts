import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IdempotencyWhereUniqueInput } from "../../../inputs/IdempotencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneIdempotencyArgs {
  @TypeGraphQL.Field(_type => IdempotencyWhereUniqueInput, {
    nullable: false
  })
  where!: IdempotencyWhereUniqueInput;
}
