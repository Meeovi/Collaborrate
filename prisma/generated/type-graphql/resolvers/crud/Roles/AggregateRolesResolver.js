"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRolesArgs_1 = require("./args/AggregateRolesArgs");
const Roles_1 = require("../../../models/Roles");
const AggregateRoles_1 = require("../../outputs/AggregateRoles");
const helpers_1 = require("../../../helpers");
let AggregateRolesResolver = class AggregateRolesResolver {
    async aggregateRoles(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRoles_1.AggregateRoles, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRolesArgs_1.AggregateRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRolesResolver.prototype, "aggregateRoles", null);
AggregateRolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Roles_1.Roles)
], AggregateRolesResolver);
exports.AggregateRolesResolver = AggregateRolesResolver;
