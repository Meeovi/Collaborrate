import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SourceOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SourceOrderByWithRelationAndSearchRelevanceInput";
import { SourceWhereInput } from "../../../inputs/SourceWhereInput";
import { SourceWhereUniqueInput } from "../../../inputs/SourceWhereUniqueInput";
import { SourceScalarFieldEnum } from "../../../../enums/SourceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSourceArgs {
  @TypeGraphQL.Field(_type => SourceWhereInput, {
    nullable: true
  })
  where?: SourceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SourceOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: SourceOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => SourceWhereUniqueInput, {
    nullable: true
  })
  cursor?: SourceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SourceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "code" | "enabled" | "description" | "latitude" | "longitude" | "pickup_location" | "contact_name" | "email" | "phone" | "fax" | "country" | "state" | "city" | "street" | "postcode"> | undefined;
}
