import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ManufacturerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ManufacturerOrderByWithRelationAndSearchRelevanceInput";
import { ManufacturerWhereInput } from "../../../inputs/ManufacturerWhereInput";
import { ManufacturerWhereUniqueInput } from "../../../inputs/ManufacturerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateManufacturerArgs {
  @TypeGraphQL.Field(_type => ManufacturerWhereInput, {
    nullable: true
  })
  where?: ManufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ManufacturerOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ManufacturerOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ManufacturerWhereUniqueInput, {
    nullable: true
  })
  cursor?: ManufacturerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
