import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PollsOrderByWithRelationAndSearchRelevanceInput";
import { PollsWhereInput } from "../../../inputs/PollsWhereInput";
import { PollsWhereUniqueInput } from "../../../inputs/PollsWhereUniqueInput";
import { PollsScalarFieldEnum } from "../../../../enums/PollsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPollsArgs {
  @TypeGraphQL.Field(_type => PollsWhereInput, {
    nullable: true
  })
  where?: PollsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PollsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: PollsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => PollsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PollsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PollsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "excerpt" | "description" | "image" | "published" | "question" | "response" | "categories" | "articles" | "products" | "customers" | "users"> | undefined;
}
