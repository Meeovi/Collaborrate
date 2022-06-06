"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCurrency_symbolsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCurrency_symbolsArgs_1 = require("./args/AggregateCurrency_symbolsArgs");
const Currency_symbols_1 = require("../../../models/Currency_symbols");
const AggregateCurrency_symbols_1 = require("../../outputs/AggregateCurrency_symbols");
const helpers_1 = require("../../../helpers");
let AggregateCurrency_symbolsResolver = class AggregateCurrency_symbolsResolver {
    async aggregateCurrency_symbols(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCurrency_symbols_1.AggregateCurrency_symbols, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCurrency_symbolsArgs_1.AggregateCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCurrency_symbolsResolver.prototype, "aggregateCurrency_symbols", null);
AggregateCurrency_symbolsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_symbols_1.Currency_symbols)
], AggregateCurrency_symbolsResolver);
exports.AggregateCurrency_symbolsResolver = AggregateCurrency_symbolsResolver;
