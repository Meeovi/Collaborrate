import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateManyCustomersInput } from "../inputs/Customer_groupCreateManyCustomersInput";

@TypeGraphQL.InputType("Customer_groupCreateManyCustomersInputEnvelope", {
  isAbstract: true
})
export class Customer_groupCreateManyCustomersInputEnvelope {
  @TypeGraphQL.Field(_type => [Customer_groupCreateManyCustomersInput], {
    nullable: false
  })
  data!: Customer_groupCreateManyCustomersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
