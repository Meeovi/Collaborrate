import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_ratesOrderByRelevanceFieldEnum } from "../../enums/Currency_ratesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Currency_ratesOrderByRelevanceInput", {
  isAbstract: true
})
export class Currency_ratesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Currency_ratesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "import_service"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
