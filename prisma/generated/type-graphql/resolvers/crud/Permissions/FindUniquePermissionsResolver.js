"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePermissionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniquePermissionsArgs_1 = require("./args/FindUniquePermissionsArgs");
const Permissions_1 = require("../../../models/Permissions");
const helpers_1 = require("../../../helpers");
let FindUniquePermissionsResolver = class FindUniquePermissionsResolver {
    async findUniquePermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Permissions_1.Permissions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePermissionsArgs_1.FindUniquePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePermissionsResolver.prototype, "findUniquePermissions", null);
FindUniquePermissionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Permissions_1.Permissions)
], FindUniquePermissionsResolver);
exports.FindUniquePermissionsResolver = FindUniquePermissionsResolver;
