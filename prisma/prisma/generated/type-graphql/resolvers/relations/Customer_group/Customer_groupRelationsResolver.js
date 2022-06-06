"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_group_1 = require("../../../models/Customer_group");
const Customers_1 = require("../../../models/Customers");
const helpers_1 = require("../../../helpers");
let Customer_groupRelationsResolver = class Customer_groupRelationsResolver {
    async customers(customer_group, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.findUnique({
            where: {
                id: customer_group.id,
            },
        }).customers({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Customers_1.Customers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_group_1.Customer_group, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_groupRelationsResolver.prototype, "customers", null);
Customer_groupRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_group_1.Customer_group)
], Customer_groupRelationsResolver);
exports.Customer_groupRelationsResolver = Customer_groupRelationsResolver;
