import { GraphQLResolveInfo } from "graphql";
import { AggregateTax_categoryArgs } from "./args/AggregateTax_categoryArgs";
import { CreateManyTax_categoryArgs } from "./args/CreateManyTax_categoryArgs";
import { CreateOneTax_categoryArgs } from "./args/CreateOneTax_categoryArgs";
import { DeleteManyTax_categoryArgs } from "./args/DeleteManyTax_categoryArgs";
import { DeleteOneTax_categoryArgs } from "./args/DeleteOneTax_categoryArgs";
import { FindFirstTax_categoryArgs } from "./args/FindFirstTax_categoryArgs";
import { FindManyTax_categoryArgs } from "./args/FindManyTax_categoryArgs";
import { FindUniqueTax_categoryArgs } from "./args/FindUniqueTax_categoryArgs";
import { GroupByTax_categoryArgs } from "./args/GroupByTax_categoryArgs";
import { UpdateManyTax_categoryArgs } from "./args/UpdateManyTax_categoryArgs";
import { UpdateOneTax_categoryArgs } from "./args/UpdateOneTax_categoryArgs";
import { UpsertOneTax_categoryArgs } from "./args/UpsertOneTax_categoryArgs";
import { Tax_category } from "../../../models/Tax_category";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTax_category } from "../../outputs/AggregateTax_category";
import { Tax_categoryGroupBy } from "../../outputs/Tax_categoryGroupBy";
export declare class Tax_categoryCrudResolver {
    aggregateTax_category(ctx: any, info: GraphQLResolveInfo, args: AggregateTax_categoryArgs): Promise<AggregateTax_category>;
    createManyTax_category(ctx: any, info: GraphQLResolveInfo, args: CreateManyTax_categoryArgs): Promise<AffectedRowsOutput>;
    createOneTax_category(ctx: any, info: GraphQLResolveInfo, args: CreateOneTax_categoryArgs): Promise<Tax_category>;
    deleteManyTax_category(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTax_categoryArgs): Promise<AffectedRowsOutput>;
    deleteOneTax_category(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTax_categoryArgs): Promise<Tax_category | null>;
    findFirstTax_category(ctx: any, info: GraphQLResolveInfo, args: FindFirstTax_categoryArgs): Promise<Tax_category | null>;
    tax_categories(ctx: any, info: GraphQLResolveInfo, args: FindManyTax_categoryArgs): Promise<Tax_category[]>;
    tax_category(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTax_categoryArgs): Promise<Tax_category | null>;
    groupByTax_category(ctx: any, info: GraphQLResolveInfo, args: GroupByTax_categoryArgs): Promise<Tax_categoryGroupBy[]>;
    updateManyTax_category(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTax_categoryArgs): Promise<AffectedRowsOutput>;
    updateOneTax_category(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTax_categoryArgs): Promise<Tax_category | null>;
    upsertOneTax_category(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTax_categoryArgs): Promise<Tax_category>;
}