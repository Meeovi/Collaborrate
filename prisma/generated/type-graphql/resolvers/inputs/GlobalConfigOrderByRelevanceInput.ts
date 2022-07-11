import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GlobalConfigOrderByRelevanceFieldEnum } from "../../enums/GlobalConfigOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GlobalConfigOrderByRelevanceInput", {
  isAbstract: true
})
export class GlobalConfigOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [GlobalConfigOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "objectId"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
