"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateCustomerArgs_1 = require("./args/CreateCustomerArgs");
const Customer_1 = require("../../../models/Customer");
const helpers_1 = require("../../../helpers");
let CreateCustomerResolver = class CreateCustomerResolver {
    async createCustomer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_1.Customer, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCustomerArgs_1.CreateCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateCustomerResolver.prototype, "createCustomer", null);
CreateCustomerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_1.Customer)
], CreateCustomerResolver);
exports.CreateCustomerResolver = CreateCustomerResolver;
