import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InternalizationOrderByWithRelationInput } from "../../../inputs/InternalizationOrderByWithRelationInput";
import { InternalizationWhereInput } from "../../../inputs/InternalizationWhereInput";
import { InternalizationWhereUniqueInput } from "../../../inputs/InternalizationWhereUniqueInput";
import { InternalizationScalarFieldEnum } from "../../../../enums/InternalizationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstInternalizationArgs {
  @TypeGraphQL.Field(_type => InternalizationWhereInput, {
    nullable: true
  })
  where?: InternalizationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InternalizationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: InternalizationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => InternalizationWhereUniqueInput, {
    nullable: true
  })
  cursor?: InternalizationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [InternalizationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "region" | "description" | "default" | "website"> | undefined;
}
