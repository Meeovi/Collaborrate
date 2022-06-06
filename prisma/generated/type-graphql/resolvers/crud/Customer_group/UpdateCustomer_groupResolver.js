"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomer_groupResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateCustomer_groupArgs_1 = require("./args/UpdateCustomer_groupArgs");
const Customer_group_1 = require("../../../models/Customer_group");
const helpers_1 = require("../../../helpers");
let UpdateCustomer_groupResolver = class UpdateCustomer_groupResolver {
    async updateCustomer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCustomer_groupArgs_1.UpdateCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateCustomer_groupResolver.prototype, "updateCustomer_group", null);
UpdateCustomer_groupResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_group_1.Customer_group)
], UpdateCustomer_groupResolver);
exports.UpdateCustomer_groupResolver = UpdateCustomer_groupResolver;
