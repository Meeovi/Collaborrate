"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTax_rateResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyTax_rateArgs_1 = require("./args/UpdateManyTax_rateArgs");
const Tax_rate_1 = require("../../../models/Tax_rate");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTax_rateResolver = class UpdateManyTax_rateResolver {
    async updateManyTax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTax_rateArgs_1.UpdateManyTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTax_rateResolver.prototype, "updateManyTax_rate", null);
UpdateManyTax_rateResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rate_1.Tax_rate)
], UpdateManyTax_rateResolver);
exports.UpdateManyTax_rateResolver = UpdateManyTax_rateResolver;
