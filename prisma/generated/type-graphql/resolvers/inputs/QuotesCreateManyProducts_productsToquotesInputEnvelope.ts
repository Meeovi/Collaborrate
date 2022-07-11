import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuotesCreateManyProducts_productsToquotesInput } from "../inputs/QuotesCreateManyProducts_productsToquotesInput";

@TypeGraphQL.InputType("QuotesCreateManyProducts_productsToquotesInputEnvelope", {
  isAbstract: true
})
export class QuotesCreateManyProducts_productsToquotesInputEnvelope {
  @TypeGraphQL.Field(_type => [QuotesCreateManyProducts_productsToquotesInput], {
    nullable: false
  })
  data!: QuotesCreateManyProducts_productsToquotesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
