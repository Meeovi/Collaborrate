"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrdersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOrdersArgs_1 = require("./args/UpdateOrdersArgs");
const Orders_1 = require("../../../models/Orders");
const helpers_1 = require("../../../helpers");
let UpdateOrdersResolver = class UpdateOrdersResolver {
    async updateOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Orders_1.Orders, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOrdersArgs_1.UpdateOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOrdersResolver.prototype, "updateOrders", null);
UpdateOrdersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], UpdateOrdersResolver);
exports.UpdateOrdersResolver = UpdateOrdersResolver;
