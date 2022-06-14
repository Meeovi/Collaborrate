import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsCreateManyCustomersInputEnvelope } from "../inputs/EmailsCreateManyCustomersInputEnvelope";
import { EmailsCreateOrConnectWithoutCustomersInput } from "../inputs/EmailsCreateOrConnectWithoutCustomersInput";
import { EmailsCreateWithoutCustomersInput } from "../inputs/EmailsCreateWithoutCustomersInput";
import { EmailsWhereUniqueInput } from "../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.InputType("EmailsCreateNestedManyWithoutCustomersInput", {
  isAbstract: true
})
export class EmailsCreateNestedManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [EmailsCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: EmailsCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: EmailsCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => EmailsCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: EmailsCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EmailsWhereUniqueInput], {
    nullable: true
  })
  connect?: EmailsWhereUniqueInput[] | undefined;
}
