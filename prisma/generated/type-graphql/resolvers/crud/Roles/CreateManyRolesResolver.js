"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyRolesArgs_1 = require("./args/CreateManyRolesArgs");
const Roles_1 = require("../../../models/Roles");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyRolesResolver = class CreateManyRolesResolver {
    async createManyRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyRolesArgs_1.CreateManyRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyRolesResolver.prototype, "createManyRoles", null);
CreateManyRolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Roles_1.Roles)
], CreateManyRolesResolver);
exports.CreateManyRolesResolver = CreateManyRolesResolver;
