"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCustomer_paymentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyCustomer_paymentArgs_1 = require("./args/UpdateManyCustomer_paymentArgs");
const Customer_payment_1 = require("../../../models/Customer_payment");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCustomer_paymentResolver = class UpdateManyCustomer_paymentResolver {
    async updateManyCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCustomer_paymentArgs_1.UpdateManyCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCustomer_paymentResolver.prototype, "updateManyCustomer_payment", null);
UpdateManyCustomer_paymentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_payment_1.Customer_payment)
], UpdateManyCustomer_paymentResolver);
exports.UpdateManyCustomer_paymentResolver = UpdateManyCustomer_paymentResolver;
