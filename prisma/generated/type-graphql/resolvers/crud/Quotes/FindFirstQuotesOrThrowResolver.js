"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstQuotesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstQuotesOrThrowArgs_1 = require("./args/FindFirstQuotesOrThrowArgs");
const Quotes_1 = require("../../../models/Quotes");
const helpers_1 = require("../../../helpers");
let FindFirstQuotesOrThrowResolver = class FindFirstQuotesOrThrowResolver {
    async findFirstQuotesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstQuotesOrThrowArgs_1.FindFirstQuotesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstQuotesOrThrowResolver.prototype, "findFirstQuotesOrThrow", null);
FindFirstQuotesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], FindFirstQuotesOrThrowResolver);
exports.FindFirstQuotesOrThrowResolver = FindFirstQuotesOrThrowResolver;
