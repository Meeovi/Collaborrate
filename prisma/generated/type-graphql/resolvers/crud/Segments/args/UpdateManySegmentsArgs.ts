import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SegmentsUpdateManyMutationInput } from "../../../inputs/SegmentsUpdateManyMutationInput";
import { SegmentsWhereInput } from "../../../inputs/SegmentsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySegmentsArgs {
  @TypeGraphQL.Field(_type => SegmentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: SegmentsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SegmentsWhereInput, {
    nullable: true
  })
  where?: SegmentsWhereInput | undefined;
}
