"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePermissionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOnePermissionsArgs_1 = require("./args/CreateOnePermissionsArgs");
const Permissions_1 = require("../../../models/Permissions");
const helpers_1 = require("../../../helpers");
let CreateOnePermissionsResolver = class CreateOnePermissionsResolver {
    async createOnePermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePermissionsArgs_1.CreateOnePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOnePermissionsResolver.prototype, "createOnePermissions", null);
CreateOnePermissionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Permissions_1.Permissions)
], CreateOnePermissionsResolver);
exports.CreateOnePermissionsResolver = CreateOnePermissionsResolver;
