import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SegmentsOrderByWithRelationInput } from "../../../inputs/SegmentsOrderByWithRelationInput";
import { SegmentsWhereInput } from "../../../inputs/SegmentsWhereInput";
import { SegmentsWhereUniqueInput } from "../../../inputs/SegmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSegmentsArgs {
  @TypeGraphQL.Field(_type => SegmentsWhereInput, {
    nullable: true
  })
  where?: SegmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SegmentsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SegmentsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SegmentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: SegmentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
