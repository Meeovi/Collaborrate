import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoicesWhereInput } from "../../../inputs/InvoicesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyInvoicesArgs {
  @TypeGraphQL.Field(_type => InvoicesWhereInput, {
    nullable: true
  })
  where?: InvoicesWhereInput | undefined;
}
