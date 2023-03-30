"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueQuotesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueQuotesOrThrowArgs_1 = require("./args/FindUniqueQuotesOrThrowArgs");
const Quotes_1 = require("../../../models/Quotes");
const helpers_1 = require("../../../helpers");
let FindUniqueQuotesOrThrowResolver = class FindUniqueQuotesOrThrowResolver {
    async findUniqueQuotesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueQuotesOrThrowArgs_1.FindUniqueQuotesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueQuotesOrThrowResolver.prototype, "findUniqueQuotesOrThrow", null);
FindUniqueQuotesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], FindUniqueQuotesOrThrowResolver);
exports.FindUniqueQuotesOrThrowResolver = FindUniqueQuotesOrThrowResolver;
