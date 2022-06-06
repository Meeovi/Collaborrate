"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCustomer_paymentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyCustomer_paymentArgs_1 = require("./args/CreateManyCustomer_paymentArgs");
const Customer_payment_1 = require("../../../models/Customer_payment");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyCustomer_paymentResolver = class CreateManyCustomer_paymentResolver {
    async createManyCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCustomer_paymentArgs_1.CreateManyCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyCustomer_paymentResolver.prototype, "createManyCustomer_payment", null);
CreateManyCustomer_paymentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_payment_1.Customer_payment)
], CreateManyCustomer_paymentResolver);
exports.CreateManyCustomer_paymentResolver = CreateManyCustomer_paymentResolver;
