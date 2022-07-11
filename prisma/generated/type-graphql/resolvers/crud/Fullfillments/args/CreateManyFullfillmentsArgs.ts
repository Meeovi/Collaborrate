import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FullfillmentsCreateManyInput } from "../../../inputs/FullfillmentsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFullfillmentsArgs {
  @TypeGraphQL.Field(_type => [FullfillmentsCreateManyInput], {
    nullable: false
  })
  data!: FullfillmentsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
