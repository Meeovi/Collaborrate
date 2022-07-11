import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_subscribersWhereInput } from "../inputs/Newsletter_subscribersWhereInput";

@TypeGraphQL.InputType("Newsletter_subscribersListRelationFilter", {
  isAbstract: true
})
export class Newsletter_subscribersListRelationFilter {
  @TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput, {
    nullable: true
  })
  every?: Newsletter_subscribersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput, {
    nullable: true
  })
  some?: Newsletter_subscribersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput, {
    nullable: true
  })
  none?: Newsletter_subscribersWhereInput | undefined;
}
