import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsCreateManyOrdersInput } from "../inputs/TransactionsCreateManyOrdersInput";

@TypeGraphQL.InputType("TransactionsCreateManyOrdersInputEnvelope", {
  isAbstract: true
})
export class TransactionsCreateManyOrdersInputEnvelope {
  @TypeGraphQL.Field(_type => [TransactionsCreateManyOrdersInput], {
    nullable: false
  })
  data!: TransactionsCreateManyOrdersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
