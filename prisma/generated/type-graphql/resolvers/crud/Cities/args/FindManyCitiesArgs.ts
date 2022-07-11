import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CitiesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CitiesOrderByWithRelationAndSearchRelevanceInput";
import { CitiesWhereInput } from "../../../inputs/CitiesWhereInput";
import { CitiesWhereUniqueInput } from "../../../inputs/CitiesWhereUniqueInput";
import { CitiesScalarFieldEnum } from "../../../../enums/CitiesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCitiesArgs {
  @TypeGraphQL.Field(_type => CitiesWhereInput, {
    nullable: true
  })
  where?: CitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CitiesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CitiesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CitiesWhereUniqueInput, {
    nullable: true
  })
  cursor?: CitiesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CitiesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "description" | "state" | "country" | "postalCode" | "image"> | undefined;
}
