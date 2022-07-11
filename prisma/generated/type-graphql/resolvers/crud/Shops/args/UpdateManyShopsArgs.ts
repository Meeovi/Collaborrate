import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShopsUpdateManyMutationInput } from "../../../inputs/ShopsUpdateManyMutationInput";
import { ShopsWhereInput } from "../../../inputs/ShopsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShopsArgs {
  @TypeGraphQL.Field(_type => ShopsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShopsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ShopsWhereInput, {
    nullable: true
  })
  where?: ShopsWhereInput | undefined;
}
