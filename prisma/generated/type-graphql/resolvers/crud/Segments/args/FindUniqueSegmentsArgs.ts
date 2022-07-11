import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SegmentsWhereUniqueInput } from "../../../inputs/SegmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSegmentsArgs {
  @TypeGraphQL.Field(_type => SegmentsWhereUniqueInput, {
    nullable: false
  })
  where!: SegmentsWhereUniqueInput;
}
