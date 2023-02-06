"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPermissionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyPermissionsArgs_1 = require("./args/FindManyPermissionsArgs");
const Permissions_1 = require("../../../models/Permissions");
const helpers_1 = require("../../../helpers");
let FindManyPermissionsResolver = class FindManyPermissionsResolver {
    async findManyPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Permissions_1.Permissions], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPermissionsArgs_1.FindManyPermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyPermissionsResolver.prototype, "findManyPermissions", null);
FindManyPermissionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Permissions_1.Permissions)
], FindManyPermissionsResolver);
exports.FindManyPermissionsResolver = FindManyPermissionsResolver;
