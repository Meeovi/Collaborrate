"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTax_rateResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneTax_rateArgs_1 = require("./args/UpdateOneTax_rateArgs");
const Tax_rate_1 = require("../../../models/Tax_rate");
const helpers_1 = require("../../../helpers");
let UpdateOneTax_rateResolver = class UpdateOneTax_rateResolver {
    async updateOneTax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_rate_1.Tax_rate, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTax_rateArgs_1.UpdateOneTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneTax_rateResolver.prototype, "updateOneTax_rate", null);
UpdateOneTax_rateResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rate_1.Tax_rate)
], UpdateOneTax_rateResolver);
exports.UpdateOneTax_rateResolver = UpdateOneTax_rateResolver;
