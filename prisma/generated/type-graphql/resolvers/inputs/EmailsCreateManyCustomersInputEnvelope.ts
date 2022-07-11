import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsCreateManyCustomersInput } from "../inputs/EmailsCreateManyCustomersInput";

@TypeGraphQL.InputType("EmailsCreateManyCustomersInputEnvelope", {
  isAbstract: true
})
export class EmailsCreateManyCustomersInputEnvelope {
  @TypeGraphQL.Field(_type => [EmailsCreateManyCustomersInput], {
    nullable: false
  })
  data!: EmailsCreateManyCustomersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
