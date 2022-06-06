"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCurrency_symbolsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyCurrency_symbolsArgs_1 = require("./args/UpdateManyCurrency_symbolsArgs");
const Currency_symbols_1 = require("../../../models/Currency_symbols");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCurrency_symbolsResolver = class UpdateManyCurrency_symbolsResolver {
    async updateManyCurrency_symbols(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_symbols.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCurrency_symbolsArgs_1.UpdateManyCurrency_symbolsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCurrency_symbolsResolver.prototype, "updateManyCurrency_symbols", null);
UpdateManyCurrency_symbolsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_symbols_1.Currency_symbols)
], UpdateManyCurrency_symbolsResolver);
exports.UpdateManyCurrency_symbolsResolver = UpdateManyCurrency_symbolsResolver;
