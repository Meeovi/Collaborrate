import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IdempotencyCreateManyInput } from "../../../inputs/IdempotencyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIdempotencyArgs {
  @TypeGraphQL.Field(_type => [IdempotencyCreateManyInput], {
    nullable: false
  })
  data!: IdempotencyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
