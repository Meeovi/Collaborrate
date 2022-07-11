import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FullfillmentsUpdateInput } from "../../../inputs/FullfillmentsUpdateInput";
import { FullfillmentsWhereUniqueInput } from "../../../inputs/FullfillmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFullfillmentsArgs {
  @TypeGraphQL.Field(_type => FullfillmentsUpdateInput, {
    nullable: false
  })
  data!: FullfillmentsUpdateInput;

  @TypeGraphQL.Field(_type => FullfillmentsWhereUniqueInput, {
    nullable: false
  })
  where!: FullfillmentsWhereUniqueInput;
}
