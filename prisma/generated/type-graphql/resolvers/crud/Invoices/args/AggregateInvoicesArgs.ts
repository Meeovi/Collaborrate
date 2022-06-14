import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoicesOrderByWithRelationInput } from "../../../inputs/InvoicesOrderByWithRelationInput";
import { InvoicesWhereInput } from "../../../inputs/InvoicesWhereInput";
import { InvoicesWhereUniqueInput } from "../../../inputs/InvoicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateInvoicesArgs {
  @TypeGraphQL.Field(_type => InvoicesWhereInput, {
    nullable: true
  })
  where?: InvoicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InvoicesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: InvoicesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => InvoicesWhereUniqueInput, {
    nullable: true
  })
  cursor?: InvoicesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
