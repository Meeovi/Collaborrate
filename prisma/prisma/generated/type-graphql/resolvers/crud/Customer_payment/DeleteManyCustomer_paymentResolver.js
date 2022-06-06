"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCustomer_paymentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyCustomer_paymentArgs_1 = require("./args/DeleteManyCustomer_paymentArgs");
const Customer_payment_1 = require("../../../models/Customer_payment");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCustomer_paymentResolver = class DeleteManyCustomer_paymentResolver {
    async deleteManyCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCustomer_paymentArgs_1.DeleteManyCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCustomer_paymentResolver.prototype, "deleteManyCustomer_payment", null);
DeleteManyCustomer_paymentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_payment_1.Customer_payment)
], DeleteManyCustomer_paymentResolver);
exports.DeleteManyCustomer_paymentResolver = DeleteManyCustomer_paymentResolver;
