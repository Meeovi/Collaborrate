import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_subscribersScalarWhereInput } from "../inputs/Newsletter_subscribersScalarWhereInput";
import { Newsletter_subscribersUpdateManyMutationInput } from "../inputs/Newsletter_subscribersUpdateManyMutationInput";

@TypeGraphQL.InputType("Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput", {
  isAbstract: true
})
export class Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput {
  @TypeGraphQL.Field(_type => Newsletter_subscribersScalarWhereInput, {
    nullable: false
  })
  where!: Newsletter_subscribersScalarWhereInput;

  @TypeGraphQL.Field(_type => Newsletter_subscribersUpdateManyMutationInput, {
    nullable: false
  })
  data!: Newsletter_subscribersUpdateManyMutationInput;
}
