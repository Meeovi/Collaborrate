import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShopsUpdateInput } from "../../../inputs/ShopsUpdateInput";
import { ShopsWhereUniqueInput } from "../../../inputs/ShopsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateShopsArgs {
  @TypeGraphQL.Field(_type => ShopsUpdateInput, {
    nullable: false
  })
  data!: ShopsUpdateInput;

  @TypeGraphQL.Field(_type => ShopsWhereUniqueInput, {
    nullable: false
  })
  where!: ShopsWhereUniqueInput;
}
