import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupWhereInput } from "../inputs/Customer_groupWhereInput";

@TypeGraphQL.InputType("Customer_groupListRelationFilter", {
  isAbstract: true
})
export class Customer_groupListRelationFilter {
  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  every?: Customer_groupWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  some?: Customer_groupWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  none?: Customer_groupWhereInput | undefined;
}
