"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCurrency_symbolsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstCurrency_symbolsArgs_1 = require("./args/FindFirstCurrency_symbolsArgs");
const Currency_symbols_1 = require("../../../models/Currency_symbols");
const helpers_1 = require("../../../helpers");
let FindFirstCurrency_symbolsResolver = class FindFirstCurrency_symbolsResolver {
    async findFirstCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Currency_symbols_1.Currency_symbols, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCurrency_symbolsArgs_1.FindFirstCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCurrency_symbolsResolver.prototype, "findFirstCurrency_symbols", null);
FindFirstCurrency_symbolsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_symbols_1.Currency_symbols)
], FindFirstCurrency_symbolsResolver);
exports.FindFirstCurrency_symbolsResolver = FindFirstCurrency_symbolsResolver;
