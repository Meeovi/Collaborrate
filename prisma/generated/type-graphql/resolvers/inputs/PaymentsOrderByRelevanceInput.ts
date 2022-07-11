import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PaymentsOrderByRelevanceFieldEnum } from "../../enums/PaymentsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PaymentsOrderByRelevanceInput", {
  isAbstract: true
})
export class PaymentsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PaymentsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"client_id" | "client_secret" | "host_uri" | "redirect_url" | "redirect_url_app" | "icon" | "name" | "active" | "country">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
