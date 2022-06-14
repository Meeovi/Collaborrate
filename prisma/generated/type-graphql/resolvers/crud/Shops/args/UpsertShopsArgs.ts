import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShopsCreateInput } from "../../../inputs/ShopsCreateInput";
import { ShopsUpdateInput } from "../../../inputs/ShopsUpdateInput";
import { ShopsWhereUniqueInput } from "../../../inputs/ShopsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertShopsArgs {
  @TypeGraphQL.Field(_type => ShopsWhereUniqueInput, {
    nullable: false
  })
  where!: ShopsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShopsCreateInput, {
    nullable: false
  })
  create!: ShopsCreateInput;

  @TypeGraphQL.Field(_type => ShopsUpdateInput, {
    nullable: false
  })
  update!: ShopsUpdateInput;
}
