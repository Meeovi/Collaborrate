"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertQuotesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertQuotesArgs_1 = require("./args/UpsertQuotesArgs");
const Quotes_1 = require("../../../models/Quotes");
const helpers_1 = require("../../../helpers");
let UpsertQuotesResolver = class UpsertQuotesResolver {
    async upsertQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertQuotesArgs_1.UpsertQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertQuotesResolver.prototype, "upsertQuotes", null);
UpsertQuotesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], UpsertQuotesResolver);
exports.UpsertQuotesResolver = UpsertQuotesResolver;
