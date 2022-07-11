import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoicesUpdateManyMutationInput } from "../../../inputs/InvoicesUpdateManyMutationInput";
import { InvoicesWhereInput } from "../../../inputs/InvoicesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyInvoicesArgs {
  @TypeGraphQL.Field(_type => InvoicesUpdateManyMutationInput, {
    nullable: false
  })
  data!: InvoicesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => InvoicesWhereInput, {
    nullable: true
  })
  where?: InvoicesWhereInput | undefined;
}
