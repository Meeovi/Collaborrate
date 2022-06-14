import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosScalarWhereInput } from "../inputs/Credit_memosScalarWhereInput";
import { Credit_memosUpdateManyMutationInput } from "../inputs/Credit_memosUpdateManyMutationInput";

@TypeGraphQL.InputType("Credit_memosUpdateManyWithWhereWithoutProductsInput", {
  isAbstract: true
})
export class Credit_memosUpdateManyWithWhereWithoutProductsInput {
  @TypeGraphQL.Field(_type => Credit_memosScalarWhereInput, {
    nullable: false
  })
  where!: Credit_memosScalarWhereInput;

  @TypeGraphQL.Field(_type => Credit_memosUpdateManyMutationInput, {
    nullable: false
  })
  data!: Credit_memosUpdateManyMutationInput;
}
