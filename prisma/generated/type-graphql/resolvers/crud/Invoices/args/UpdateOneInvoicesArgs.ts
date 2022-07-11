import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoicesUpdateInput } from "../../../inputs/InvoicesUpdateInput";
import { InvoicesWhereUniqueInput } from "../../../inputs/InvoicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneInvoicesArgs {
  @TypeGraphQL.Field(_type => InvoicesUpdateInput, {
    nullable: false
  })
  data!: InvoicesUpdateInput;

  @TypeGraphQL.Field(_type => InvoicesWhereUniqueInput, {
    nullable: false
  })
  where!: InvoicesWhereUniqueInput;
}
