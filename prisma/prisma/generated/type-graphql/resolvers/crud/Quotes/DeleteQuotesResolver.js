"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteQuotesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteQuotesArgs_1 = require("./args/DeleteQuotesArgs");
const Quotes_1 = require("../../../models/Quotes");
const helpers_1 = require("../../../helpers");
let DeleteQuotesResolver = class DeleteQuotesResolver {
    async deleteQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteQuotesArgs_1.DeleteQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteQuotesResolver.prototype, "deleteQuotes", null);
DeleteQuotesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], DeleteQuotesResolver);
exports.DeleteQuotesResolver = DeleteQuotesResolver;
