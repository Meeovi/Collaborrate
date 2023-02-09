"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByQuotesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByQuotesArgs_1 = require("./args/GroupByQuotesArgs");
const Quotes_1 = require("../../../models/Quotes");
const QuotesGroupBy_1 = require("../../outputs/QuotesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByQuotesResolver = class GroupByQuotesResolver {
    async groupByQuotes(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [QuotesGroupBy_1.QuotesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByQuotesArgs_1.GroupByQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByQuotesResolver.prototype, "groupByQuotes", null);
GroupByQuotesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], GroupByQuotesResolver);
exports.GroupByQuotesResolver = GroupByQuotesResolver;
