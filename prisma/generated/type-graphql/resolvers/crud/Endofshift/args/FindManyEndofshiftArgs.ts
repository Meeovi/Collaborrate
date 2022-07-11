import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EndofshiftOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/EndofshiftOrderByWithRelationAndSearchRelevanceInput";
import { EndofshiftWhereInput } from "../../../inputs/EndofshiftWhereInput";
import { EndofshiftWhereUniqueInput } from "../../../inputs/EndofshiftWhereUniqueInput";
import { EndofshiftScalarFieldEnum } from "../../../../enums/EndofshiftScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyEndofshiftArgs {
  @TypeGraphQL.Field(_type => EndofshiftWhereInput, {
    nullable: true
  })
  where?: EndofshiftWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EndofshiftOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: EndofshiftOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => EndofshiftWhereUniqueInput, {
    nullable: true
  })
  cursor?: EndofshiftWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EndofshiftScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "content" | "login" | "mcms" | "next_shift" | "projects" | "tickets" | "whid"> | undefined;
}
