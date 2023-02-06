"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPermissionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstPermissionsArgs_1 = require("./args/FindFirstPermissionsArgs");
const Permissions_1 = require("../../../models/Permissions");
const helpers_1 = require("../../../helpers");
let FindFirstPermissionsResolver = class FindFirstPermissionsResolver {
    async findFirstPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPermissionsArgs_1.FindFirstPermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPermissionsResolver.prototype, "findFirstPermissions", null);
FindFirstPermissionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Permissions_1.Permissions)
], FindFirstPermissionsResolver);
exports.FindFirstPermissionsResolver = FindFirstPermissionsResolver;
