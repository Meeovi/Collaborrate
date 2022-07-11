import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlobalConfigOrderByWithAggregationInput } from "../../../inputs/GlobalConfigOrderByWithAggregationInput";
import { GlobalConfigScalarWhereWithAggregatesInput } from "../../../inputs/GlobalConfigScalarWhereWithAggregatesInput";
import { GlobalConfigWhereInput } from "../../../inputs/GlobalConfigWhereInput";
import { GlobalConfigScalarFieldEnum } from "../../../../enums/GlobalConfigScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGlobalConfigArgs {
  @TypeGraphQL.Field(_type => GlobalConfigWhereInput, {
    nullable: true
  })
  where?: GlobalConfigWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GlobalConfigOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GlobalConfigOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GlobalConfigScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"objectId" | "params" | "masterKeyOnly">;

  @TypeGraphQL.Field(_type => GlobalConfigScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GlobalConfigScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
