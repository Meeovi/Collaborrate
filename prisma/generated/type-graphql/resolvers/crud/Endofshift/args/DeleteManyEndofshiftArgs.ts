import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EndofshiftWhereInput } from "../../../inputs/EndofshiftWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEndofshiftArgs {
  @TypeGraphQL.Field(_type => EndofshiftWhereInput, {
    nullable: true
  })
  where?: EndofshiftWhereInput | undefined;
}
