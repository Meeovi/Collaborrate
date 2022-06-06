"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCurrency_symbolsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueCurrency_symbolsArgs_1 = require("./args/FindUniqueCurrency_symbolsArgs");
const Currency_symbols_1 = require("../../../models/Currency_symbols");
const helpers_1 = require("../../../helpers");
let FindUniqueCurrency_symbolsResolver = class FindUniqueCurrency_symbolsResolver {
    async findUniqueCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCurrency_symbolsArgs_1.FindUniqueCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCurrency_symbolsResolver.prototype, "findUniqueCurrency_symbols", null);
FindUniqueCurrency_symbolsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_symbols_1.Currency_symbols)
], FindUniqueCurrency_symbolsResolver);
exports.FindUniqueCurrency_symbolsResolver = FindUniqueCurrency_symbolsResolver;
