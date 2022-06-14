import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollsOrderByWithRelationInput } from "../../../inputs/PollsOrderByWithRelationInput";
import { PollsWhereInput } from "../../../inputs/PollsWhereInput";
import { PollsWhereUniqueInput } from "../../../inputs/PollsWhereUniqueInput";
import { PollsScalarFieldEnum } from "../../../../enums/PollsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPollsArgs {
  @TypeGraphQL.Field(_type => PollsWhereInput, {
    nullable: true
  })
  where?: PollsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PollsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PollsOrderByWithRelationInput[] | undefined;

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
