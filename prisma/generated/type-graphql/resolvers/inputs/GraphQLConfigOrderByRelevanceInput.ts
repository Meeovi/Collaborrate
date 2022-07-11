import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GraphQLConfigOrderByRelevanceFieldEnum } from "../../enums/GraphQLConfigOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GraphQLConfigOrderByRelevanceInput", {
  isAbstract: true
})
export class GraphQLConfigOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [GraphQLConfigOrderByRelevanceFieldEnum], {
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
