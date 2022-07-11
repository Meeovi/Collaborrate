import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsUpdateWithoutUsersInput } from "../inputs/EmailsUpdateWithoutUsersInput";
import { EmailsWhereUniqueInput } from "../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.InputType("EmailsUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class EmailsUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => EmailsWhereUniqueInput, {
    nullable: false
  })
  where!: EmailsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmailsUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: EmailsUpdateWithoutUsersInput;
}
