"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCustomer_groupResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneCustomer_groupArgs_1 = require("./args/DeleteOneCustomer_groupArgs");
const Customer_group_1 = require("../../../models/Customer_group");
const helpers_1 = require("../../../helpers");
let DeleteOneCustomer_groupResolver = class DeleteOneCustomer_groupResolver {
    async deleteOneCustomer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_group_1.Customer_group, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCustomer_groupArgs_1.DeleteOneCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCustomer_groupResolver.prototype, "deleteOneCustomer_group", null);
DeleteOneCustomer_groupResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_group_1.Customer_group)
], DeleteOneCustomer_groupResolver);
exports.DeleteOneCustomer_groupResolver = DeleteOneCustomer_groupResolver;
