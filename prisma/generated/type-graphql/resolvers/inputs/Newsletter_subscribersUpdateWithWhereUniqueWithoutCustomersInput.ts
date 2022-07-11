import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_subscribersUpdateWithoutCustomersInput } from "../inputs/Newsletter_subscribersUpdateWithoutCustomersInput";
import { Newsletter_subscribersWhereUniqueInput } from "../inputs/Newsletter_subscribersWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_subscribersWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_subscribersUpdateWithoutCustomersInput, {
    nullable: false
  })
  data!: Newsletter_subscribersUpdateWithoutCustomersInput;
}
