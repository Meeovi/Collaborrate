"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueQuotesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueQuotesArgs_1 = require("./args/FindUniqueQuotesArgs");
const Quotes_1 = require("../../../models/Quotes");
const helpers_1 = require("../../../helpers");
let FindUniqueQuotesResolver = class FindUniqueQuotesResolver {
    async findUniqueQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueQuotesArgs_1.FindUniqueQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueQuotesResolver.prototype, "findUniqueQuotes", null);
FindUniqueQuotesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], FindUniqueQuotesResolver);
exports.FindUniqueQuotesResolver = FindUniqueQuotesResolver;
