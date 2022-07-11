import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SurveysUpdateManyMutationInput } from "../../../inputs/SurveysUpdateManyMutationInput";
import { SurveysWhereInput } from "../../../inputs/SurveysWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySurveysArgs {
  @TypeGraphQL.Field(_type => SurveysUpdateManyMutationInput, {
    nullable: false
  })
  data!: SurveysUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SurveysWhereInput, {
    nullable: true
  })
  where?: SurveysWhereInput | undefined;
}
