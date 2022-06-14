import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CitiesOrderByWithAggregationInput } from "../../../inputs/CitiesOrderByWithAggregationInput";
import { CitiesScalarWhereWithAggregatesInput } from "../../../inputs/CitiesScalarWhereWithAggregatesInput";
import { CitiesWhereInput } from "../../../inputs/CitiesWhereInput";
import { CitiesScalarFieldEnum } from "../../../../enums/CitiesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCitiesArgs {
  @TypeGraphQL.Field(_type => CitiesWhereInput, {
    nullable: true
  })
  where?: CitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CitiesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CitiesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CitiesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "state" | "country" | "postalCode" | "image">;

  @TypeGraphQL.Field(_type => CitiesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CitiesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
