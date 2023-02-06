"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePermissionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePermissionsArgs_1 = require("./args/AggregatePermissionsArgs");
const Permissions_1 = require("../../../models/Permissions");
const AggregatePermissions_1 = require("../../outputs/AggregatePermissions");
const helpers_1 = require("../../../helpers");
let AggregatePermissionsResolver = class AggregatePermissionsResolver {
    async aggregatePermissions(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePermissions_1.AggregatePermissions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePermissionsArgs_1.AggregatePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePermissionsResolver.prototype, "aggregatePermissions", null);
AggregatePermissionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Permissions_1.Permissions)
], AggregatePermissionsResolver);
exports.AggregatePermissionsResolver = AggregatePermissionsResolver;
