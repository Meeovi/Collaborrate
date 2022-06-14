import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoicesCreateInput } from "../../../inputs/InvoicesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateInvoicesArgs {
  @TypeGraphQL.Field(_type => InvoicesCreateInput, {
    nullable: false
  })
  data!: InvoicesCreateInput;
}
