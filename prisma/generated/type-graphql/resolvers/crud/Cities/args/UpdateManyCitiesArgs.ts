import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CitiesUpdateManyMutationInput } from "../../../inputs/CitiesUpdateManyMutationInput";
import { CitiesWhereInput } from "../../../inputs/CitiesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCitiesArgs {
  @TypeGraphQL.Field(_type => CitiesUpdateManyMutationInput, {
    nullable: false
  })
  data!: CitiesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CitiesWhereInput, {
    nullable: true
  })
  where?: CitiesWhereInput | undefined;
}
