import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SegmentsCreateManyInput } from "../../../inputs/SegmentsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySegmentsArgs {
  @TypeGraphQL.Field(_type => [SegmentsCreateManyInput], {
    nullable: false
  })
  data!: SegmentsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
