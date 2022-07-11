import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosCreateManyProductsInput } from "../inputs/Credit_memosCreateManyProductsInput";

@TypeGraphQL.InputType("Credit_memosCreateManyProductsInputEnvelope", {
  isAbstract: true
})
export class Credit_memosCreateManyProductsInputEnvelope {
  @TypeGraphQL.Field(_type => [Credit_memosCreateManyProductsInput], {
    nullable: false
  })
  data!: Credit_memosCreateManyProductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
