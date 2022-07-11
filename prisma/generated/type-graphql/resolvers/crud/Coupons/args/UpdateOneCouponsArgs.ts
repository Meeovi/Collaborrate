import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CouponsUpdateInput } from "../../../inputs/CouponsUpdateInput";
import { CouponsWhereUniqueInput } from "../../../inputs/CouponsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCouponsArgs {
  @TypeGraphQL.Field(_type => CouponsUpdateInput, {
    nullable: false
  })
  data!: CouponsUpdateInput;

  @TypeGraphQL.Field(_type => CouponsWhereUniqueInput, {
    nullable: false
  })
  where!: CouponsWhereUniqueInput;
}
