import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OotoOrderByWithRelationInput } from "../../../inputs/OotoOrderByWithRelationInput";
import { OotoWhereInput } from "../../../inputs/OotoWhereInput";
import { OotoWhereUniqueInput } from "../../../inputs/OotoWhereUniqueInput";
import { OotoScalarFieldEnum } from "../../../../enums/OotoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyOotoArgs {
  @TypeGraphQL.Field(_type => OotoWhereInput, {
    nullable: true
  })
  where?: OotoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OotoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OotoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OotoWhereUniqueInput, {
    nullable: true
  })
  cursor?: OotoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OotoScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "login" | "start_date" | "end_date" | "note" | "using_time" | "location"> | undefined;
}
