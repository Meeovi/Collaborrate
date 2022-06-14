import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoicesCreateManyInput } from "../../../inputs/InvoicesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyInvoicesArgs {
  @TypeGraphQL.Field(_type => [InvoicesCreateManyInput], {
    nullable: false
  })
  data!: InvoicesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
