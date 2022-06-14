import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoicesCreateInput } from "../../../inputs/InvoicesCreateInput";
import { InvoicesUpdateInput } from "../../../inputs/InvoicesUpdateInput";
import { InvoicesWhereUniqueInput } from "../../../inputs/InvoicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertInvoicesArgs {
  @TypeGraphQL.Field(_type => InvoicesWhereUniqueInput, {
    nullable: false
  })
  where!: InvoicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => InvoicesCreateInput, {
    nullable: false
  })
  create!: InvoicesCreateInput;

  @TypeGraphQL.Field(_type => InvoicesUpdateInput, {
    nullable: false
  })
  update!: InvoicesUpdateInput;
}
