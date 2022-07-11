import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosCreateManyCustomersInput } from "../inputs/Credit_memosCreateManyCustomersInput";

@TypeGraphQL.InputType("Credit_memosCreateManyCustomersInputEnvelope", {
  isAbstract: true
})
export class Credit_memosCreateManyCustomersInputEnvelope {
  @TypeGraphQL.Field(_type => [Credit_memosCreateManyCustomersInput], {
    nullable: false
  })
  data!: Credit_memosCreateManyCustomersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
