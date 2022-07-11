import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsCreateWithoutCustomersInput } from "../inputs/EmailsCreateWithoutCustomersInput";
import { EmailsUpdateWithoutCustomersInput } from "../inputs/EmailsUpdateWithoutCustomersInput";
import { EmailsWhereUniqueInput } from "../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.InputType("EmailsUpsertWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class EmailsUpsertWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => EmailsWhereUniqueInput, {
    nullable: false
  })
  where!: EmailsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmailsUpdateWithoutCustomersInput, {
    nullable: false
  })
  update!: EmailsUpdateWithoutCustomersInput;

  @TypeGraphQL.Field(_type => EmailsCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: EmailsCreateWithoutCustomersInput;
}
