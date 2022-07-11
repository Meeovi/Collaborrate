import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsScalarWhereInput } from "../inputs/EmailsScalarWhereInput";
import { EmailsUpdateManyMutationInput } from "../inputs/EmailsUpdateManyMutationInput";

@TypeGraphQL.InputType("EmailsUpdateManyWithWhereWithoutCustomersInput", {
  isAbstract: true
})
export class EmailsUpdateManyWithWhereWithoutCustomersInput {
  @TypeGraphQL.Field(_type => EmailsScalarWhereInput, {
    nullable: false
  })
  where!: EmailsScalarWhereInput;

  @TypeGraphQL.Field(_type => EmailsUpdateManyMutationInput, {
    nullable: false
  })
  data!: EmailsUpdateManyMutationInput;
}
