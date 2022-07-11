import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FullfillmentsUpdateManyMutationInput } from "../../../inputs/FullfillmentsUpdateManyMutationInput";
import { FullfillmentsWhereInput } from "../../../inputs/FullfillmentsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFullfillmentsArgs {
  @TypeGraphQL.Field(_type => FullfillmentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: FullfillmentsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FullfillmentsWhereInput, {
    nullable: true
  })
  where?: FullfillmentsWhereInput | undefined;
}
