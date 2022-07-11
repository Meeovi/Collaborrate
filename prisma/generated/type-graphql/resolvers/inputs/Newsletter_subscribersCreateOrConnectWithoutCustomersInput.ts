import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_subscribersCreateWithoutCustomersInput } from "../inputs/Newsletter_subscribersCreateWithoutCustomersInput";
import { Newsletter_subscribersWhereUniqueInput } from "../inputs/Newsletter_subscribersWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_subscribersCreateOrConnectWithoutCustomersInput", {
  isAbstract: true
})
export class Newsletter_subscribersCreateOrConnectWithoutCustomersInput {
  @TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_subscribersWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_subscribersCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: Newsletter_subscribersCreateWithoutCustomersInput;
}
