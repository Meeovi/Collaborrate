import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PaymentsOrderByWithRelationAndSearchRelevanceInput";
import { PaymentsWhereInput } from "../../../inputs/PaymentsWhereInput";
import { PaymentsWhereUniqueInput } from "../../../inputs/PaymentsWhereUniqueInput";
import { PaymentsScalarFieldEnum } from "../../../../enums/PaymentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPaymentsArgs {
  @TypeGraphQL.Field(_type => PaymentsWhereInput, {
    nullable: true
  })
  where?: PaymentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PaymentsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: PaymentsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => PaymentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PaymentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PaymentsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "client_id" | "client_secret" | "host_uri" | "redirect_url" | "redirect_url_app" | "icon" | "name" | "active" | "country"> | undefined;
}
