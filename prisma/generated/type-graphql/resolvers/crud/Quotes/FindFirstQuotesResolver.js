"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstQuotesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstQuotesArgs_1 = require("./args/FindFirstQuotesArgs");
const Quotes_1 = require("../../../models/Quotes");
const helpers_1 = require("../../../helpers");
let FindFirstQuotesResolver = class FindFirstQuotesResolver {
    async findFirstQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Quotes_1.Quotes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstQuotesArgs_1.FindFirstQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstQuotesResolver.prototype, "findFirstQuotes", null);
FindFirstQuotesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], FindFirstQuotesResolver);
exports.FindFirstQuotesResolver = FindFirstQuotesResolver;
