"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPermissionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyPermissionsArgs_1 = require("./args/CreateManyPermissionsArgs");
const Permissions_1 = require("../../../models/Permissions");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyPermissionsResolver = class CreateManyPermissionsResolver {
    async createManyPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPermissionsArgs_1.CreateManyPermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyPermissionsResolver.prototype, "createManyPermissions", null);
CreateManyPermissionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Permissions_1.Permissions)
], CreateManyPermissionsResolver);
exports.CreateManyPermissionsResolver = CreateManyPermissionsResolver;
