"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneQuotesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneQuotesArgs_1 = require("./args/UpdateOneQuotesArgs");
const Quotes_1 = require("../../../models/Quotes");
const helpers_1 = require("../../../helpers");
let UpdateOneQuotesResolver = class UpdateOneQuotesResolver {
    async updateOneQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Quotes_1.Quotes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneQuotesArgs_1.UpdateOneQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneQuotesResolver.prototype, "updateOneQuotes", null);
UpdateOneQuotesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], UpdateOneQuotesResolver);
exports.UpdateOneQuotesResolver = UpdateOneQuotesResolver;
