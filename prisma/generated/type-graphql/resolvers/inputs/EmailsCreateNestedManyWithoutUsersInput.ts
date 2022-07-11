import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsCreateManyUsersInputEnvelope } from "../inputs/EmailsCreateManyUsersInputEnvelope";
import { EmailsCreateOrConnectWithoutUsersInput } from "../inputs/EmailsCreateOrConnectWithoutUsersInput";
import { EmailsCreateWithoutUsersInput } from "../inputs/EmailsCreateWithoutUsersInput";
import { EmailsWhereUniqueInput } from "../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.InputType("EmailsCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class EmailsCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [EmailsCreateWithoutUsersInput], {
    nullable: true
  })
  create?: EmailsCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: EmailsCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => EmailsCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: EmailsCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EmailsWhereUniqueInput], {
    nullable: true
  })
  connect?: EmailsWhereUniqueInput[] | undefined;
}
