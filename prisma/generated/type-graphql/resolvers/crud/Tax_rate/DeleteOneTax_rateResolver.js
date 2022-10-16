"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTax_rateResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneTax_rateArgs_1 = require("./args/DeleteOneTax_rateArgs");
const Tax_rate_1 = require("../../../models/Tax_rate");
const helpers_1 = require("../../../helpers");
let DeleteOneTax_rateResolver = class DeleteOneTax_rateResolver {
    async deleteOneTax_rate(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_rate.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTax_rateArgs_1.DeleteOneTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTax_rateResolver.prototype, "deleteOneTax_rate", null);
DeleteOneTax_rateResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_rate_1.Tax_rate)
], DeleteOneTax_rateResolver);
exports.DeleteOneTax_rateResolver = DeleteOneTax_rateResolver;
