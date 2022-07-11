import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransactionsUpdateManyMutationInput } from "../../../inputs/TransactionsUpdateManyMutationInput";
import { TransactionsWhereInput } from "../../../inputs/TransactionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTransactionsArgs {
  @TypeGraphQL.Field(_type => TransactionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: TransactionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TransactionsWhereInput, {
    nullable: true
  })
  where?: TransactionsWhereInput | undefined;
}
