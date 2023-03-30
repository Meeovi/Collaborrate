"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneQuotesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneQuotesArgs_1 = require("./args/UpsertOneQuotesArgs");
const Quotes_1 = require("../../../models/Quotes");
const helpers_1 = require("../../../helpers");
let UpsertOneQuotesResolver = class UpsertOneQuotesResolver {
    async upsertOneQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Quotes_1.Quotes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneQuotesArgs_1.UpsertOneQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneQuotesResolver.prototype, "upsertOneQuotes", null);
UpsertOneQuotesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], UpsertOneQuotesResolver);
exports.UpsertOneQuotesResolver = UpsertOneQuotesResolver;
