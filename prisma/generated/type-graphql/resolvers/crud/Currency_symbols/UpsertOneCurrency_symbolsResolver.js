"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCurrency_symbolsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneCurrency_symbolsArgs_1 = require("./args/UpsertOneCurrency_symbolsArgs");
const Currency_symbols_1 = require("../../../models/Currency_symbols");
const helpers_1 = require("../../../helpers");
let UpsertOneCurrency_symbolsResolver = class UpsertOneCurrency_symbolsResolver {
    async upsertOneCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_symbols_1.Currency_symbols, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCurrency_symbolsArgs_1.UpsertOneCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCurrency_symbolsResolver.prototype, "upsertOneCurrency_symbols", null);
UpsertOneCurrency_symbolsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_symbols_1.Currency_symbols)
], UpsertOneCurrency_symbolsResolver);
exports.UpsertOneCurrency_symbolsResolver = UpsertOneCurrency_symbolsResolver;
