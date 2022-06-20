import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput";
import { Newsletter_subscribersWhereInput } from "../../../inputs/Newsletter_subscribersWhereInput";
import { Newsletter_subscribersWhereUniqueInput } from "../../../inputs/Newsletter_subscribersWhereUniqueInput";
import { Newsletter_subscribersScalarFieldEnum } from "../../../../enums/Newsletter_subscribersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstNewsletter_subscribersArgs {
  @TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput, {
    nullable: true
  })
  where?: Newsletter_subscribersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Newsletter_subscribersOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput, {
    nullable: true
  })
  cursor?: Newsletter_subscribersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "email" | "customer_first_name" | "customer_last_name" | "store" | "status" | "websites" | "created_at" | "cust_id"> | undefined;
}
