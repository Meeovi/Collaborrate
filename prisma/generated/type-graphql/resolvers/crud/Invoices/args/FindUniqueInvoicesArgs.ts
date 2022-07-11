import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoicesWhereUniqueInput } from "../../../inputs/InvoicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueInvoicesArgs {
  @TypeGraphQL.Field(_type => InvoicesWhereUniqueInput, {
    nullable: false
  })
  where!: InvoicesWhereUniqueInput;
}
