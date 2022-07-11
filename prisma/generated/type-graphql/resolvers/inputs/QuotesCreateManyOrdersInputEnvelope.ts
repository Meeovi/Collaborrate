import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateManyOrdersInput } from "../inputs/QuotesCreateManyOrdersInput";

@TypeGraphQL.InputType("QuotesCreateManyOrdersInputEnvelope", {
  isAbstract: true
})
export class QuotesCreateManyOrdersInputEnvelope {
  @TypeGraphQL.Field(_type => [QuotesCreateManyOrdersInput], {
    nullable: false
  })
  data!: QuotesCreateManyOrdersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
