import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CouponsWhereInput } from "../../../inputs/CouponsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCouponsArgs {
  @TypeGraphQL.Field(_type => CouponsWhereInput, {
    nullable: true
  })
  where?: CouponsWhereInput | undefined;
}
