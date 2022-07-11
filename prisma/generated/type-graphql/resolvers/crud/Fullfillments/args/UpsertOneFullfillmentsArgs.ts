import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FullfillmentsCreateInput } from "../../../inputs/FullfillmentsCreateInput";
import { FullfillmentsUpdateInput } from "../../../inputs/FullfillmentsUpdateInput";
import { FullfillmentsWhereUniqueInput } from "../../../inputs/FullfillmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFullfillmentsArgs {
  @TypeGraphQL.Field(_type => FullfillmentsWhereUniqueInput, {
    nullable: false
  })
  where!: FullfillmentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => FullfillmentsCreateInput, {
    nullable: false
  })
  create!: FullfillmentsCreateInput;

  @TypeGraphQL.Field(_type => FullfillmentsUpdateInput, {
    nullable: false
  })
  update!: FullfillmentsUpdateInput;
}
