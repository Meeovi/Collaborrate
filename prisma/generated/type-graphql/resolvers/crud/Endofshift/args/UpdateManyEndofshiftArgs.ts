import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EndofshiftUpdateManyMutationInput } from "../../../inputs/EndofshiftUpdateManyMutationInput";
import { EndofshiftWhereInput } from "../../../inputs/EndofshiftWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEndofshiftArgs {
  @TypeGraphQL.Field(_type => EndofshiftUpdateManyMutationInput, {
    nullable: false
  })
  data!: EndofshiftUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EndofshiftWhereInput, {
    nullable: true
  })
  where?: EndofshiftWhereInput | undefined;
}
