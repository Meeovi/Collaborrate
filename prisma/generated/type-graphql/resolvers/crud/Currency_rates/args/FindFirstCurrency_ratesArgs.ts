import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_ratesOrderByWithRelationInput } from "../../../inputs/Currency_ratesOrderByWithRelationInput";
import { Currency_ratesWhereInput } from "../../../inputs/Currency_ratesWhereInput";
import { Currency_ratesWhereUniqueInput } from "../../../inputs/Currency_ratesWhereUniqueInput";
import { Currency_ratesScalarFieldEnum } from "../../../../enums/Currency_ratesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCurrency_ratesArgs {
  @TypeGraphQL.Field(_type => Currency_ratesWhereInput, {
    nullable: true
  })
  where?: Currency_ratesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Currency_ratesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Currency_ratesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Currency_ratesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Currency_ratesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"import_service" | "usd"> | undefined;
}
