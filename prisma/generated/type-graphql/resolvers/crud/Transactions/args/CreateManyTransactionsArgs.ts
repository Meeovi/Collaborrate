import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransactionsCreateManyInput } from "../../../inputs/TransactionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTransactionsArgs {
  @TypeGraphQL.Field(_type => [TransactionsCreateManyInput], {
    nullable: false
  })
  data!: TransactionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
