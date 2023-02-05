"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateQuotesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateQuotesArgs_1 = require("./args/AggregateQuotesArgs");
const Quotes_1 = require("../../../models/Quotes");
const AggregateQuotes_1 = require("../../outputs/AggregateQuotes");
const helpers_1 = require("../../../helpers");
let AggregateQuotesResolver = class AggregateQuotesResolver {
    async aggregateQuotes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateQuotes_1.AggregateQuotes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateQuotesArgs_1.AggregateQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateQuotesResolver.prototype, "aggregateQuotes", null);
AggregateQuotesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], AggregateQuotesResolver);
exports.AggregateQuotesResolver = AggregateQuotesResolver;
