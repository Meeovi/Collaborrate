import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Url_rewritesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Url_rewritesOrderByWithRelationAndSearchRelevanceInput";
import { Url_rewritesWhereInput } from "../../../inputs/Url_rewritesWhereInput";
import { Url_rewritesWhereUniqueInput } from "../../../inputs/Url_rewritesWhereUniqueInput";
import { Url_rewritesScalarFieldEnum } from "../../../../enums/Url_rewritesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUrl_rewritesArgs {
  @TypeGraphQL.Field(_type => Url_rewritesWhereInput, {
    nullable: true
  })
  where?: Url_rewritesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Url_rewritesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Url_rewritesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Url_rewritesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Url_rewritesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Url_rewritesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "request_path" | "description" | "redirect_type" | "target_path" | "store"> | undefined;
}
