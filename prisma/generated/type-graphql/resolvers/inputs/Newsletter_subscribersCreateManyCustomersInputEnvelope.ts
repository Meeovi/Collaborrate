import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_subscribersCreateManyCustomersInput } from "../inputs/Newsletter_subscribersCreateManyCustomersInput";

@TypeGraphQL.InputType("Newsletter_subscribersCreateManyCustomersInputEnvelope", {
  isAbstract: true
})
export class Newsletter_subscribersCreateManyCustomersInputEnvelope {
  @TypeGraphQL.Field(_type => [Newsletter_subscribersCreateManyCustomersInput], {
    nullable: false
  })
  data!: Newsletter_subscribersCreateManyCustomersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
