import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationsOrderByWithRelationInput } from "../../../inputs/IntegrationsOrderByWithRelationInput";
import { IntegrationsWhereInput } from "../../../inputs/IntegrationsWhereInput";
import { IntegrationsWhereUniqueInput } from "../../../inputs/IntegrationsWhereUniqueInput";
import { IntegrationsScalarFieldEnum } from "../../../../enums/IntegrationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyIntegrationsArgs {
  @TypeGraphQL.Field(_type => IntegrationsWhereInput, {
    nullable: true
  })
  where?: IntegrationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IntegrationsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: IntegrationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [IntegrationsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "content" | "media" | "location" | "category"> | undefined;
}
