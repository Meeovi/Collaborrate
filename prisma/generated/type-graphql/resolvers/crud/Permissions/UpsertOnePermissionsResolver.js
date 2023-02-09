"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePermissionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOnePermissionsArgs_1 = require("./args/UpsertOnePermissionsArgs");
const Permissions_1 = require("../../../models/Permissions");
const helpers_1 = require("../../../helpers");
let UpsertOnePermissionsResolver = class UpsertOnePermissionsResolver {
    async upsertOnePermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Permissions_1.Permissions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePermissionsArgs_1.UpsertOnePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOnePermissionsResolver.prototype, "upsertOnePermissions", null);
UpsertOnePermissionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Permissions_1.Permissions)
], UpsertOnePermissionsResolver);
exports.UpsertOnePermissionsResolver = UpsertOnePermissionsResolver;
