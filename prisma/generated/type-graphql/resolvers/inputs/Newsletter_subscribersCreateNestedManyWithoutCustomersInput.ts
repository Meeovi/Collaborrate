import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_subscribersCreateManyCustomersInputEnvelope } from "../inputs/Newsletter_subscribersCreateManyCustomersInputEnvelope";
import { Newsletter_subscribersCreateOrConnectWithoutCustomersInput } from "../inputs/Newsletter_subscribersCreateOrConnectWithoutCustomersInput";
import { Newsletter_subscribersCreateWithoutCustomersInput } from "../inputs/Newsletter_subscribersCreateWithoutCustomersInput";
import { Newsletter_subscribersWhereUniqueInput } from "../inputs/Newsletter_subscribersWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_subscribersCreateNestedManyWithoutCustomersInput", {
  isAbstract: true
})
export class Newsletter_subscribersCreateNestedManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [Newsletter_subscribersCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: Newsletter_subscribersCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: Newsletter_subscribersCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: Newsletter_subscribersCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersWhereUniqueInput], {
    nullable: true
  })
  connect?: Newsletter_subscribersWhereUniqueInput[] | undefined;
}
