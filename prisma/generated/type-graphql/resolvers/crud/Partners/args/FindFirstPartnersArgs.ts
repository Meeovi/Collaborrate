import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PartnersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PartnersOrderByWithRelationAndSearchRelevanceInput";
import { PartnersWhereInput } from "../../../inputs/PartnersWhereInput";
import { PartnersWhereUniqueInput } from "../../../inputs/PartnersWhereUniqueInput";
import { PartnersScalarFieldEnum } from "../../../../enums/PartnersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPartnersArgs {
  @TypeGraphQL.Field(_type => PartnersWhereInput, {
    nullable: true
  })
  where?: PartnersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PartnersOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: PartnersOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => PartnersWhereUniqueInput, {
    nullable: true
  })
  cursor?: PartnersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PartnersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "address" | "city" | "state" | "country" | "isPublic" | "business_type"> | undefined;
}
