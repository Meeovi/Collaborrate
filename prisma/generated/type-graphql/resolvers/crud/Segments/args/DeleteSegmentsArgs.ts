import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SegmentsWhereUniqueInput } from "../../../inputs/SegmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSegmentsArgs {
  @TypeGraphQL.Field(_type => SegmentsWhereUniqueInput, {
    nullable: false
  })
  where!: SegmentsWhereUniqueInput;
}
