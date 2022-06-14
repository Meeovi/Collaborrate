import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsCreateWithoutUsersInput } from "../inputs/EmailsCreateWithoutUsersInput";
import { EmailsUpdateWithoutUsersInput } from "../inputs/EmailsUpdateWithoutUsersInput";
import { EmailsWhereUniqueInput } from "../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.InputType("EmailsUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class EmailsUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => EmailsWhereUniqueInput, {
    nullable: false
  })
  where!: EmailsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmailsUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: EmailsUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => EmailsCreateWithoutUsersInput, {
    nullable: false
  })
  create!: EmailsCreateWithoutUsersInput;
}
