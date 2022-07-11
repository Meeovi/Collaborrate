import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SegmentsWhereInput } from "../../../inputs/SegmentsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySegmentsArgs {
  @TypeGraphQL.Field(_type => SegmentsWhereInput, {
    nullable: true
  })
  where?: SegmentsWhereInput | undefined;
}
