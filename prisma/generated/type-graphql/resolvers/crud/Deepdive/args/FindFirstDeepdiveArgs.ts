import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeepdiveOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DeepdiveOrderByWithRelationAndSearchRelevanceInput";
import { DeepdiveWhereInput } from "../../../inputs/DeepdiveWhereInput";
import { DeepdiveWhereUniqueInput } from "../../../inputs/DeepdiveWhereUniqueInput";
import { DeepdiveScalarFieldEnum } from "../../../../enums/DeepdiveScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDeepdiveArgs {
  @TypeGraphQL.Field(_type => DeepdiveWhereInput, {
    nullable: true
  })
  where?: DeepdiveWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeepdiveOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: DeepdiveOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => DeepdiveWhereUniqueInput, {
    nullable: true
  })
  cursor?: DeepdiveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DeepdiveScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "end_date" | "content" | "attendees" | "login" | "start_date" | "whid"> | undefined;
}
