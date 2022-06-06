"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateUsersArgs_1 = require("./args/UpdateUsersArgs");
const Users_1 = require("../../../models/Users");
const helpers_1 = require("../../../helpers");
let UpdateUsersResolver = class UpdateUsersResolver {
    async updateUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).users.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Users_1.Users, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateUsersArgs_1.UpdateUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateUsersResolver.prototype, "updateUsers", null);
UpdateUsersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], UpdateUsersResolver);
exports.UpdateUsersResolver = UpdateUsersResolver;
