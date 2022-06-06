"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCurrency_symbolsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCurrency_symbolsArgs_1 = require("./args/GroupByCurrency_symbolsArgs");
const Currency_symbols_1 = require("../../../models/Currency_symbols");
const Currency_symbolsGroupBy_1 = require("../../outputs/Currency_symbolsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCurrency_symbolsResolver = class GroupByCurrency_symbolsResolver {
    async groupByCurrency_symbols(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Currency_symbolsGroupBy_1.Currency_symbolsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCurrency_symbolsArgs_1.GroupByCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCurrency_symbolsResolver.prototype, "groupByCurrency_symbols", null);
GroupByCurrency_symbolsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_symbols_1.Currency_symbols)
], GroupByCurrency_symbolsResolver);
exports.GroupByCurrency_symbolsResolver = GroupByCurrency_symbolsResolver;
