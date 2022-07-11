import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SegmentsUpdateInput } from "../../../inputs/SegmentsUpdateInput";
import { SegmentsWhereUniqueInput } from "../../../inputs/SegmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSegmentsArgs {
  @TypeGraphQL.Field(_type => SegmentsUpdateInput, {
    nullable: false
  })
  data!: SegmentsUpdateInput;

  @TypeGraphQL.Field(_type => SegmentsWhereUniqueInput, {
    nullable: false
  })
  where!: SegmentsWhereUniqueInput;
}
