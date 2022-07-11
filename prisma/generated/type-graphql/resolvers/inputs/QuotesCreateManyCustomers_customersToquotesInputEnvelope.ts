import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateManyCustomers_customersToquotesInput } from "../inputs/QuotesCreateManyCustomers_customersToquotesInput";

@TypeGraphQL.InputType("QuotesCreateManyCustomers_customersToquotesInputEnvelope", {
  isAbstract: true
})
export class QuotesCreateManyCustomers_customersToquotesInputEnvelope {
  @TypeGraphQL.Field(_type => [QuotesCreateManyCustomers_customersToquotesInput], {
    nullable: false
  })
  data!: QuotesCreateManyCustomers_customersToquotesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
