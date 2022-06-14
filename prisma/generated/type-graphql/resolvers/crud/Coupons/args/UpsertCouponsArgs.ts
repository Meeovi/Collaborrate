import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CouponsCreateInput } from "../../../inputs/CouponsCreateInput";
import { CouponsUpdateInput } from "../../../inputs/CouponsUpdateInput";
import { CouponsWhereUniqueInput } from "../../../inputs/CouponsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCouponsArgs {
  @TypeGraphQL.Field(_type => CouponsWhereUniqueInput, {
    nullable: false
  })
  where!: CouponsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CouponsCreateInput, {
    nullable: false
  })
  create!: CouponsCreateInput;

  @TypeGraphQL.Field(_type => CouponsUpdateInput, {
    nullable: false
  })
  update!: CouponsUpdateInput;
}
