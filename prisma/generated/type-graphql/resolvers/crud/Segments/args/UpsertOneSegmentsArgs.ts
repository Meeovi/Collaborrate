import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SegmentsCreateInput } from "../../../inputs/SegmentsCreateInput";
import { SegmentsUpdateInput } from "../../../inputs/SegmentsUpdateInput";
import { SegmentsWhereUniqueInput } from "../../../inputs/SegmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSegmentsArgs {
  @TypeGraphQL.Field(_type => SegmentsWhereUniqueInput, {
    nullable: false
  })
  where!: SegmentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SegmentsCreateInput, {
    nullable: false
  })
  create!: SegmentsCreateInput;

  @TypeGraphQL.Field(_type => SegmentsUpdateInput, {
    nullable: false
  })
  update!: SegmentsUpdateInput;
}
