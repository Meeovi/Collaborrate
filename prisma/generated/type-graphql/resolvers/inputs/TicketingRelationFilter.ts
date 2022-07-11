import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TicketingWhereInput } from "../inputs/TicketingWhereInput";

@TypeGraphQL.InputType("TicketingRelationFilter", {
  isAbstract: true
})
export class TicketingRelationFilter {
  @TypeGraphQL.Field(_type => TicketingWhereInput, {
    nullable: true
  })
  is?: TicketingWhereInput | undefined;

  @TypeGraphQL.Field(_type => TicketingWhereInput, {
    nullable: true
  })
  isNot?: TicketingWhereInput | undefined;
}
