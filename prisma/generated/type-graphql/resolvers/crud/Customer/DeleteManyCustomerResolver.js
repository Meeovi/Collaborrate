"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCustomerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyCustomerArgs_1 = require("./args/DeleteManyCustomerArgs");
const Customer_1 = require("../../../models/Customer");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCustomerResolver = class DeleteManyCustomerResolver {
    async deleteManyCustomer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCustomerArgs_1.DeleteManyCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCustomerResolver.prototype, "deleteManyCustomer", null);
DeleteManyCustomerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_1.Customer)
], DeleteManyCustomerResolver);
exports.DeleteManyCustomerResolver = DeleteManyCustomerResolver;
