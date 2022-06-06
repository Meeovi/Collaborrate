"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCurrency_ratesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyCurrency_ratesArgs_1 = require("./args/UpdateManyCurrency_ratesArgs");
const Currency_rates_1 = require("../../../models/Currency_rates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCurrency_ratesResolver = class UpdateManyCurrency_ratesResolver {
    async updateManyCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCurrency_ratesArgs_1.UpdateManyCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCurrency_ratesResolver.prototype, "updateManyCurrency_rates", null);
UpdateManyCurrency_ratesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_rates_1.Currency_rates)
], UpdateManyCurrency_ratesResolver);
exports.UpdateManyCurrency_ratesResolver = UpdateManyCurrency_ratesResolver;
