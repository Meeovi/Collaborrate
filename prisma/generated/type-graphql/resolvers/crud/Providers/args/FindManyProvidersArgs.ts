import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProvidersOrderByWithRelationInput } from "../../../inputs/ProvidersOrderByWithRelationInput";
import { ProvidersWhereInput } from "../../../inputs/ProvidersWhereInput";
import { ProvidersWhereUniqueInput } from "../../../inputs/ProvidersWhereUniqueInput";
import { ProvidersScalarFieldEnum } from "../../../../enums/ProvidersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProvidersArgs {
  @TypeGraphQL.Field(_type => ProvidersWhereInput, {
    nullable: true
  })
  where?: ProvidersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProvidersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProvidersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProvidersWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProvidersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProvidersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "client_id" | "client_secret" | "host_uri" | "redirect_url" | "redirect_url_app" | "icon" | "name" | "active"> | undefined;
}
