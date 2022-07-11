import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsUpdateWithoutCustomersInput } from "../inputs/EmailsUpdateWithoutCustomersInput";
import { EmailsWhereUniqueInput } from "../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.InputType("EmailsUpdateWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class EmailsUpdateWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => EmailsWhereUniqueInput, {
    nullable: false
  })
  where!: EmailsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmailsUpdateWithoutCustomersInput, {
    nullable: false
  })
  data!: EmailsUpdateWithoutCustomersInput;
}
