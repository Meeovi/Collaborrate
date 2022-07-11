import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SegmentsCreateInput } from "../../../inputs/SegmentsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSegmentsArgs {
  @TypeGraphQL.Field(_type => SegmentsCreateInput, {
    nullable: false
  })
  data!: SegmentsCreateInput;
}
