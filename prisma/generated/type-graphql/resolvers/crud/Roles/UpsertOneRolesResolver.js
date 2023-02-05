"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneRolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneRolesArgs_1 = require("./args/UpsertOneRolesArgs");
const Roles_1 = require("../../../models/Roles");
const helpers_1 = require("../../../helpers");
let UpsertOneRolesResolver = class UpsertOneRolesResolver {
    async upsertOneRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Roles_1.Roles, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneRolesArgs_1.UpsertOneRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneRolesResolver.prototype, "upsertOneRoles", null);
UpsertOneRolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Roles_1.Roles)
], UpsertOneRolesResolver);
exports.UpsertOneRolesResolver = UpsertOneRolesResolver;
